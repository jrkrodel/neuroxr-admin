export default {
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Biography",
      name: "bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "role",
      type: "string",
      title: "Role",
    },
  ],
};
