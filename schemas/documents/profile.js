export default {
  name: "profile",
  type: "document",
  title: "Profiles",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Biography",
      name: "bio",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      type: "string",
      title: "Role Type",
      options: {
        list: [
          { title: "Director", value: "directors" },
          { title: "Research Operator", value: "researchOps" },
          { title: "Developer", value: "developers" },
          { title: "Affiliate", value: "affiliates" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "roleTitle",
      type: "string",
      title: "Role Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required(),
    },
  ],
};
