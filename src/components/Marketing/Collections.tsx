import { getCollections } from "@/lib/shopify";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Link from "next/link";
import Image from "next/image";

export default async function Collections() {
  const collections = await getCollections();

  // Filter out "All" collection for display
  const displayCollections = collections.filter((c) => c.handle !== "");

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayCollections.map((collection) => (
            <Link
              key={collection.handle}
              href={collection.path as Route}
              className="group relative overflow-hidden rounded-2xl transition-all hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {collection.image ? (
                  <>
                    <Image
                      src={collection.image.url}
                      alt={collection.image.altText || `${collection.title} collection`}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                        New Collection
                      </p>
                      <h3 className="mt-1 text-3xl font-bold leading-tight transition-transform duration-300 group-hover:translate-x-1">
                        {collection.title}
                      </h3>
                      {collection.description && (
                        <p className="mt-2 text-sm text-white/90 line-clamp-2">
                          {collection.description}
                        </p>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <Icon
                      icon="solar:bag-4-bold-duotone"
                      width={64}
                      className="text-primary/40 transition-transform group-hover:scale-110"
                    />
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
