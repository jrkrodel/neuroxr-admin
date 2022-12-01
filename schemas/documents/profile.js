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
      name: "alt",
      title: "Alt Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "role",
      title: "Profile Type",
      type: "reference",
      to: [{ type: "profile_type" }],
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
    {
      name: "alumni",
      type: "boolean",
      title: "Alumni",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      order: "order",
      alum: "alumni",
      image: "image",
    },
    prepare(selection) {
      const { title, order, alum, image } = selection;
      return {
        title: title,
        subtitle: "Display Order: " + order + `${alum ? " - Alumni" : ""}`,
        media: image,
      };
    },
  },
};
