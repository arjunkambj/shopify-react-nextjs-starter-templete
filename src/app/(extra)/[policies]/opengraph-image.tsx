import OpengraphImage from '@/components/opengraph-image';
import { getPage } from '@/lib/shopify';

export default async function Image({ params }: { params: { policies: string } }) {
  const page = await getPage(params.policies);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
