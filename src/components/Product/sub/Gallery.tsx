'use client';

import { Icon } from '@iconify/react';
import { GridTileImage } from '@/components/shared/GridTile';
import { useProduct, useUpdateURL } from './ProductContext';
import Image from 'next/image';
import { Button } from '@heroui/react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;

  return (
    <form>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        {images[imageIndex] && (
          <Image
            className="h-full w-full object-contain"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            alt={images[imageIndex]?.altText as string}
            src={images[imageIndex]?.src as string}
            priority={true}
          />
        )}

        {images.length > 1 ? (
          <div className="absolute bottom-[15%] flex w-full justify-center">
            <div className="mx-auto flex h-11 items-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-sm">
              <Button
                aria-label="Previous product image"
                variant="light"
                isIconOnly
                radius="full"
                className="h-full"
                onPress={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
              >
                <Icon icon="solar:alt-arrow-left-linear" width={20} aria-hidden="true" />
              </Button>
              <div className="mx-1 h-6 w-px bg-border"></div>
              <Button
                aria-label="Next product image"
                variant="light"
                isIconOnly
                radius="full"
                className="h-full"
                onPress={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
              >
                <Icon icon="solar:alt-arrow-right-linear" width={20} aria-hidden="true" />
              </Button>
            </div>
          </div>
        ) : null}
      </div>

      {images.length > 1 ? (
        <ul className="my-12 flex items-center flex-wrap justify-center gap-2 overflow-auto py-1 lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="h-20 w-20">
                <Button
                  aria-label="Select product image"
                  variant={isActive ? 'solid' : 'light'}
                  color={isActive ? 'primary' : 'default'}
                  radius="md"
                  className="h-full w-full p-0"
                  onPress={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </Button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </form>
  );
}
