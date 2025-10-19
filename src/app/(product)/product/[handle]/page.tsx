import Product from "@/components/Product/Product";
import { getProduct } from "@/lib/shopify";
import { notFound } from "next/navigation";

export { generateMetadata } from "@/components/Product/Product";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = await getProduct(handle);
  if (!product) return notFound();

  return <Product product={product} />;
}
