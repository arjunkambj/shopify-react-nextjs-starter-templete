'use client';

import { Icon } from '@iconify/react';
import { Input } from '@heroui/react';
import Form from 'next/form';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <Input
        key={searchParams?.get('q')}
        name="q"
        type="text"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get('q') || ''}
        startContent={<Icon icon="heroicons-outline:magnifying-glass" className="h-4 text-neutral-500" aria-hidden="true" />}
        variant="bordered"
        radius="lg"
        size="md"
        classNames={{
          input: 'text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400',
          inputWrapper: 'bg-white dark:bg-transparent',
        }}
      />
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <Input
        isDisabled
        placeholder="Search for products..."
        startContent={<Icon icon="heroicons-outline:magnifying-glass" className="h-4 text-neutral-500" aria-hidden="true" />}
        variant="bordered"
        radius="lg"
        size="sm"
      />
    </form>
  );
}
