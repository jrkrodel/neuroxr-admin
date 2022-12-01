export default {
  name: "research_doc",
  type: "document",
  title: "Research Documents",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "File",
      name: "file",
      type: "file",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "featured",
      title: "Featured",
      description:
        "If Featured is true, this document will display on the additional research list",
      type: "boolean",
      validation: (Rule) => Rule.required(),
      initalValue: false,
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
      featured: "featured",
    },
    prepare(selection) {
      const { title, order, featured } = selection;
      return {
        title: title,
        subtitle:
          "Display Order: " + order + `${featured ? " - Featured" : ""}`,
      };
    },
  },
};
