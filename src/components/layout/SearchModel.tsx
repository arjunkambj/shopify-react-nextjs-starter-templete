"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const searchParams = useSearchParams();

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <Icon icon="solar:magnifer-linear" width={20} aria-hidden="true" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Form
                  action="/search"
                  className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
                >
                  <Input
                    key={searchParams?.get("q")}
                    name="q"
                    type="text"
                    placeholder="Search for products..."
                    autoComplete="off"
                    defaultValue={searchParams?.get("q") || ""}
                    startContent={
                      <Icon
                        icon="heroicons-outline:magnifying-glass"
                        className="h-4 text-neutral-500"
                        aria-hidden="true"
                      />
                    }
                    variant="bordered"
                    radius="lg"
                    size="md"
                    classNames={{
                      input:
                        "text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
                      inputWrapper: "bg-white dark:bg-transparent",
                    }}
                  />
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <Input
        isDisabled
        placeholder="Search for products..."
        startContent={
          <Icon
            icon="heroicons-outline:magnifying-glass"
            className="h-4 text-neutral-500"
            aria-hidden="true"
          />
        }
        variant="bordered"
        radius="lg"
        size="sm"
      />
    </form>
  );
}
