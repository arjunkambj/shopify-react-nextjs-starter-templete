import Collections from "@/components/Collections/Collections";
import FilterList from "@/components/Collections/FilterList";
import { sorting } from "@/lib/constants";
import { Suspense } from "react";
import ChildrenWrapper from "./children-wrapper";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-col gap-6 px-4 py-8 text-foreground md:gap-8 md:px-6 md:py-12 lg:flex-row lg:gap-12 lg:px-8">
      <aside className="order-first w-full flex-none space-y-6 lg:max-w-[200px] lg:sticky lg:top-8 lg:h-fit">
        <FilterList list={sorting} title="Sort by" />
        <Collections />
      </aside>

      <main className="order-last min-h-screen w-full lg:order-none">
        <Suspense fallback={null}>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Suspense>
      </main>
    </div>
  );
}
