import { CogIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: "title",
      description: "This field is the title of your site.",
      title: "Title",
      type: "string",
      initialValue: "Site.",
      validation: (rule) => rule.required(),
    },
  ],
});
