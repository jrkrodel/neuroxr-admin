export default {
  name: "studentCollabrator",
  type: "document",
  title: "Student vs. Collaborator Card",
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
    {
      title: "Type",
      name: "type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Student Info Card", value: "student" },
          { title: "Collabrator Card", value: "collabrator" },
        ],
      },
    },
  ],
};
