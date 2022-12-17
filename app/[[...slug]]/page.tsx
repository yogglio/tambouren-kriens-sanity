import PagePage from "components/Page";
import {
  getAllPagesSlugs,
  getPageBySlug,
  getSettings,
} from "lib/sanity.client";

export async function generateStaticParams() {
  return await getAllPagesSlugs();
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string[] };
}) {
  // Start fetching settings early, so it runs in parallel with the post query
  const settings = getSettings();

  /*
  import { PreviewSuspense } from 'components/PreviewSuspense'
  import { previewData } from 'next/headers'
  if (previewData()) {
    const token = previewData().token || null
    const data = getPostAndMoreStories(params.slug, token)
    return (
      <PreviewSuspense
        fallback={<PostPage loading preview data={await data} settings={await settings} />}
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }
  // */

  // if slug: false, then we're at the root-most route
  // then load "home" page
  if (!params?.slug) {
    params.slug = ["home"];
  }

  const data = getPageBySlug(params.slug[0]);
  return <PagePage data={await data} settings={await settings} />;
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1;
