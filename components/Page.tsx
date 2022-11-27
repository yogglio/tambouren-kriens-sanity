import Container from "components/BlogContainer";
import BlogHeader from "components/BlogHeader";
import Layout from "components/BlogLayout";
import HeroPost from "components/HeroPost";
import MoreStories from "components/MoreStories";
import type { Page, Post, Settings } from "lib/sanity.queries";
import Head from "next/head";

export default function PagePage(props: {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  settings: Settings;
}) {
  const { preview, loading, page, settings } = props;
  const title = settings?.title || "Set a Title";
  console.log(page);

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <BlogHeader title={title} level={1} />
          <div>{page?.title}</div>
        </Container>
      </Layout>
    </>
  );
}
