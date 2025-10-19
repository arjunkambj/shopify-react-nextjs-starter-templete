"use client";

import { Icon } from "@iconify/react";
import { useProduct, useUpdateURL } from "./ProductContext";
import Image from "next/image";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Gallery({
  images,
}: {
  images: { src: string; altText: string }[];
}) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [pendingUrlState, setPendingUrlState] =
    useState<ReturnType<typeof updateImage> | null>(null);
  const hasSingleImage = images.length === 1;

  const handleImageClick = (index: number) => {
    const newState = updateImage(index.toString());
    setPendingUrlState(newState);
    setSelectedImage(index);
    onOpen();
  };

  const nextImage = () => {
    const nextIndex = selectedImage + 1 < images.length ? selectedImage + 1 : 0;
    setSelectedImage(nextIndex);
    const newState = updateImage(nextIndex.toString());
    setPendingUrlState(newState);
  };

  const previousImage = () => {
    const prevIndex =
      selectedImage === 0 ? images.length - 1 : selectedImage - 1;
    setSelectedImage(prevIndex);
    const newState = updateImage(prevIndex.toString());
    setPendingUrlState(newState);
  };

  const handleModalClose = () => {
    onClose();
    if (pendingUrlState) {
      updateURL(pendingUrlState);
      setPendingUrlState(null);
    }
  };

  return (
    <>
      <div
        className={`grid gap-3 ${hasSingleImage ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {images.map((image, index) => {
          const isActive = index === imageIndex;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => handleImageClick(index)}
              className={cn(
                "relative w-full overflow-hidden rounded-xl transition-all duration-300 ease-out focus-visible:outline-none focus-visible:opacity-100 focus-visible:shadow-xl active:scale-[0.98]",
                isActive ? "opacity-100 shadow-xl" : "opacity-60"
              )}
              aria-label={`View ${image.altText}`}
            >
              <Image
                className="w-full h-auto object-contain transition-transform duration-300"
                width={800}
                height={800}
                sizes={
                  hasSingleImage
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(min-width: 1024px) 33vw, 50vw"
                }
                alt={image.altText}
                src={image.src}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />
              {isActive && (
                <div className="absolute inset-0 rounded-xl pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        size="5xl"
        backdrop="blur"
        classNames={{
          base: "bg-background/95",
          backdrop: "bg-black/80",
        }}
      >
        <ModalContent>
          <ModalBody className="p-0">
            <div className="relative aspect-square w-full">
              <Image
                className="h-full w-full object-contain"
                fill
                sizes="90vw"
                alt={images[selectedImage]?.altText as string}
                src={images[selectedImage]?.src as string}
                priority
              />

              {images.length > 1 && (
                <>
                  <Button
                    aria-label="Previous image"
                    variant="solid"
                    color="default"
                    isIconOnly
                    radius="full"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onPress={previousImage}
                  >
                    <Icon icon="solar:alt-arrow-left-linear" width={24} />
                  </Button>

                  <Button
                    aria-label="Next image"
                    variant="solid"
                    color="default"
                    isIconOnly
                    radius="full"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onPress={nextImage}
                  >
                    <Icon icon="solar:alt-arrow-right-linear" width={24} />
                  </Button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    {selectedImage + 1} / {images.length}
                  </div>
                </>
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
