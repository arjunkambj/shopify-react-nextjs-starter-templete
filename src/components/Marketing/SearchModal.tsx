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

export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const searchParams = useSearchParams();

  return (
    <>
      <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
        <Icon icon="solar:magnifer-outline" width={20} aria-hidden="true" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" placement="top">
        <ModalContent>
          {() => (
            <>
              <ModalBody className="py-6">
                <Form
                  action="/search"
                  className="w-full"
                >
                  <Input
                    key={searchParams?.get("q")}
                    name="q"
                    type="text"
                    placeholder="Search for products..."
                    autoComplete="off"
                    autoFocus
                    defaultValue={searchParams?.get("q") || ""}
                    startContent={
                      <Icon
                        icon="solar:magnifer-outline"
                        width={20}
                        className="text-neutral-500"
                        aria-hidden="true"
                      />
                    }
                    variant="bordered"
                    radius="lg"
                    size="lg"
                    classNames={{
                      input:
                        "text-foreground placeholder:text-muted-foreground",
                      inputWrapper: "bg-background",
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
    <Button isIconOnly size="sm" variant="light" isDisabled>
      <Icon icon="solar:magnifer-outline" width={20} aria-hidden="true" />
    </Button>
  );
}
