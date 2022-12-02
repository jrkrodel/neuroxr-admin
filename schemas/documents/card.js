import { GrDocumentPdf } from "react-icons/gr";

export default {
  name: "card",
  type: "document",
  title: "Card",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "desc",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "link",
                fields: [
                  {
                    name: "url",
                    type: "url",
                  },
                ],
              },
              {
                name: "internalLink",
                type: "object",
                title: "Internal link",
                blockEditor: {
                  icon: GrDocumentPdf,
                },
                fields: [
                  {
                    name: "doc",
                    type: "reference",
                    to: [{ type: "research_doc" }],
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
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
      title: "Type of Link",
      name: "link_type",
      type: "string",
      options: {
        list: [
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" },
        ],
      },
      initialValue: "internal",
    },
    {
      title: "Internal URL",
      name: "i_url",
      type: "string",
      hidden: ({ document }) => document?.link_type !== "internal",
      options: {
        list: [
          { title: "Home", value: "#/home" },
          { title: "About", value: "#/about" },
          { title: "Our Research", value: "#/our-research" },
          { title: "Resources & Equipment", value: "#/resources-equipment" },
          { title: "Get Involved", value: "#/get-involved" },
          { title: "Our Team", value: "#/our-team" },
          { title: "Contact Us", value: "#/contact-us" },
        ],
      },
    },
    {
      title: "External URL",
      name: "e_url",
      type: "url",
      hidden: ({ document }) => document?.link_type !== "external",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      description: "Type determines which page the card will be displayed on",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Resource or Equipment", value: "equipment" },
          { title: "Student Roles", value: "sRole" },
        ],
      },
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
      image: "image",
    },
    prepare(selection) {
      const { title, order, image } = selection;
      return {
        title: title,
        subtitle: "Display Order: " + order,
        media: image,
      };
    },
  },
};
