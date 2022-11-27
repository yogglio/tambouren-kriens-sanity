import PagePage from "components/Page";
import { apiVersion, dataset, projectId } from "lib/sanity.api";
import {
  type Page,
  type Settings,
  pageBySlugQuery,
  pageSlugsQuery,
  settingsQuery,
} from "lib/sanity.queries";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import { createClient } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { lazy } from "react";

const PreviewPagePage = lazy(() => import("components/PreviewPagePage"));

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [];
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });
    let slugs = await client.fetch(pageSlugsQuery);
    paths = slugs.map((slug) => ({ params: { slug: [slug] } }));
  }

  return {
    // "slug: false" to render the root-most route
    paths: [{ params: { slug: false } }, ...paths],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  { preview: boolean; token: string | null; page: Page; settings: Settings },
  { slug: string[] },
  { token?: string }
> = async ({ params, preview = false, previewData = {} }) => {
  console.log(params);

  /* check if the project id has been defined by fetching the vercel envs */
  if (projectId) {
    const token = previewData?.token || null;
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: preview,
    });

    // if slug: false, then we're at the root-most route
    // then load "home" page
    if (!params?.slug) {
      params.slug = ["home"];
    }
    const pagePromise = client.fetch<Page>(pageBySlugQuery, {
      slug: params.slug[0],
    });
    const settingsPromise = client.fetch<Settings>(settingsQuery);

    return {
      props: {
        preview,
        token,
        page: (await pagePromise) || ({} as any),
        settings: (await settingsPromise) || {},
      },
      // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
    };
  }

  /* when the client isn't set up */
  return {
    props: { preview: false, token: null, page: {}, settings: {} },
    revalidate: undefined,
  };
};

export default function PageRoute({
  preview,
  token,
  page,
  settings,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (preview) {
    return (
      <PreviewSuspense
        fallback={<PagePage preview loading page={page} settings={settings} />}
      >
        <PreviewPagePage token={token} />
      </PreviewSuspense>
    );
  }

  return <PagePage page={page} settings={settings} />;
}
