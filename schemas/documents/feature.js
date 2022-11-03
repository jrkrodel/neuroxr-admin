export default {
  name: "feature",
  type: "document",
  title: "Feature",
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
      type: "string",
    },
    {
      title: "Pages",
      name: "page",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "home" },
          { title: "About", value: "about" },
          { title: "Our Research", value: "research" },
          { title: "Resources & Equipment", value: "resource_equipment" },
        ],
      },
    },
  ],
};
