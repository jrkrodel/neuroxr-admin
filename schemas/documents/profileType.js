export default {
  name: "profile_type",
  type: "document",
  title: "Profile Types",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      description:
        "Fill out profile type title and then press the generate button. This generates a slug with the needed format that is used on the front-end to handle the sub navigation.",
      title: "Profile Slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
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
    },
    prepare(selection) {
      const { title, order } = selection;
      return {
        title: title,
        subtitle: "Display Order: " + order,
      };
    },
  },
};
