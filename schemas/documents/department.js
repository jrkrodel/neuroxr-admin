export default {
  name: "department",
  type: "document",
  title: "Role",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Description",
      name: "desc",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      title: "External URL",
      name: "e_url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      title: "Internal URL",
      name: "i_url",
      type: "slug",
    },
  ],
};
