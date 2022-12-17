import Container from "components/BlogContainer";
import BlogHeader from "components/BlogHeader";
import Layout from "components/BlogLayout";
import type { Page, Settings } from "lib/sanity.queries";
import Head from "next/head";

export default function PagePage(props: {
  preview?: boolean;
  loading?: boolean;
  data: Page;
  settings: Settings;
}) {
  const { preview, loading, data, settings } = props;
  const title = settings?.title || "Set a Title";

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <BlogHeader title={title} level={1} />
          <div>{data?.title}</div>
        </Container>
      </Layout>
    </>
  );
}
