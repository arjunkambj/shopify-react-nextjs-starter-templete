'use client';

import { Icon } from '@iconify/react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader } from '@heroui/react';
import Link from 'next/link';
import type { Route } from 'next';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Menu } from '@/lib/shopify/types';
import Search, { SearchSkeleton } from './search';

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const openMobileMenu = () => setIsOpen(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <Button
        onPress={openMobileMenu}
        aria-label="Open mobile menu"
        isIconOnly
        variant="bordered"
        className="md:hidden border-neutral-200 dark:border-neutral-700 text-black dark:text-white h-11 w-11"
      >
        <Icon icon="heroicons-outline:bars-3" className="h-4" aria-hidden="true" />
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={setIsOpen} placement="left" size="full">
        <DrawerContent className="bg-white dark:bg-black">
          {(onClose) => (
            <>
              <DrawerHeader className="p-4">
                <Button
                  isIconOnly
                  variant="bordered"
                  className="border-neutral-200 dark:border-neutral-700 text-black dark:text-white h-11 w-11"
                  onPress={onClose}
                  aria-label="Close mobile menu"
                >
                  <Icon icon="heroicons-outline:x-mark" className="h-6" aria-hidden="true" />
                </Button>
              </DrawerHeader>
              <DrawerBody className="px-4 pb-6">
                <div className="mb-4 w-full">
                  <Suspense fallback={<SearchSkeleton />}>
                    <Search />
                  </Suspense>
                </div>
                {menu.length ? (
                  <ul className="flex w-full flex-col">
                    {menu.map((item: Menu) => (
                      <li
                        className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                        key={item.title}
                      >
                        <Link href={item.path as unknown as Route} prefetch={true} onClick={onClose}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
