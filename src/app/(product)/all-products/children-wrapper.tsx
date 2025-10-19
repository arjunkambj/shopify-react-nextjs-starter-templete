"use client";

import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

// Ensure catalog views re-render when filters (e.g., sort) change.
export default function ProductsChildrenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  return <Fragment key={searchParams.toString()}>{children}</Fragment>;
}
