import PagePage from "components/Page";
import { usePreview } from "lib/sanity.preview";
import {
  type Page,
  type Settings,
  indexQuery,
  settingsQuery,
} from "lib/sanity.queries";

export default function PreviewPagePage({ token }: { token: null | string }) {
  const page: Page = usePreview(token, indexQuery) || [];
  const settings: Settings = usePreview(token, settingsQuery) || {};

  return <PagePage preview page={page} settings={settings} />;
}
