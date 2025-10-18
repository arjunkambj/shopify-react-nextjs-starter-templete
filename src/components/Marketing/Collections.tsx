import { getCollections } from "@/lib/shopify";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Link from "next/link";

export default async function Collections() {
  const collections = await getCollections();

  // Filter out "All" collection for display
  const displayCollections = collections.filter((c) => c.handle !== "");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Shop by Collection
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Discover our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayCollections.map((collection) => (
            <Link
              key={collection.handle}
              href={collection.path as Route}
              className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Icon
                    icon="solar:bag-4-bold-duotone"
                    width={64}
                    className="text-primary/40 transition-transform group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                  {collection.title}
                </h3>
                {collection.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
                    {collection.description}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  View Collection
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
