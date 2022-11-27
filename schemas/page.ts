import { BookIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  icon: BookIcon,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          name: "textBlock",
          title: "Text",
          type: "object",
          fields: [
            {
              name: "textBlockItem",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
        {
          type: "image",
        },
      ],
    },
  ],
});
