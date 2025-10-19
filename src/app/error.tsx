'use client';

import { Button } from '@heroui/react';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
      <h2 className="text-xl font-bold">Oh no!</h2>
      <p className="my-2">
        There was an issue with our storefront. This could be a temporary issue, please try your
        action again.
      </p>
      <Button
        fullWidth
        radius="full"
        size="lg"
        color="primary"
        className="mt-4"
        onPress={reset}
      >
        Try Again
      </Button>
    </div>
  );
}
