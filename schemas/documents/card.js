import {GrDocumentPdf} from 'react-icons/gr'

export default {
  name: 'card',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of card also serves as the link text if link is set',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'url',
                    type: 'url',
                    validation: (Rule) => Rule.required(),
                  },
                ],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal PDF Link',
                blockEditor: {
                  icon: GrDocumentPdf,
                },
                fields: [
                  {
                    title: 'Research Document Reference',
                    name: 'doc',
                    type: 'reference',
                    to: [{type: 'research_doc'}],
                    validation: (Rule) => Rule.required(),
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
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Type of Link',
      name: 'link_type',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'External', value: 'external'},
          {title: 'Internal', value: 'internal'},
          {title: 'Research Document', value: 'research'},
        ],
      },
      initialValue: 'none',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Internal URL',
      name: 'i_url',
      type: 'string',
      hidden: ({document}) => document?.link_type !== 'internal',
      options: {
        list: [
          {title: 'Home', value: '#home'},
          {title: 'About', value: '#about'},
          {title: 'Our Research', value: '#our-research'},
          {title: 'Resources & Equipment', value: '#resources-equipment'},
          {title: 'Get Involved', value: '#get-involved'},
          {title: 'Our Team', value: '#our-team'},
          {title: 'Contact Us', value: '#contact-us'},
        ],
      },
      validation: (Rule) =>
        Rule.custom((value, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (document.link_type === 'internal' && value === undefined)
            return 'Internal Link Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
    },
    {
      title: 'External URL',
      name: 'e_url',
      type: 'url',
      hidden: ({document}) => document?.link_type !== 'external',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).custom((value, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (document.link_type === 'external' && value === undefined)
            return 'External Link Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
    },
    {
      title: 'Research Document Reference',
      name: 'research_doc_ref',
      type: 'reference',
      to: [{type: 'research_doc'}],
      hidden: ({document}) => document?.link_type !== 'research',
      validation: (Rule) =>
        Rule.custom((value, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (document.link_type === 'research' && value === undefined)
            return 'Research Document Reference Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
    },
    {
      title: 'Card Type',
      name: 'type',
      type: 'string',
      description: 'Card type determines which page the card will be displayed on',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Resource or Equipment', value: 'equipment'},
          {title: 'Student Roles', value: 'sRole'},
        ],
      },
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      image: 'image',
    },
    prepare(selection) {
      const {title, order, image} = selection
      return {
        title: title,
        subtitle: 'Display Order: ' + order,
        media: image,
      }
    },
  },
}
