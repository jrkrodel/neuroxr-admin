import {BsCameraVideo} from 'react-icons/bs'
import {GrDocumentPdf} from 'react-icons/gr'

const shouldShow = (document) => {
  return document.contentType
}

export default {
  name: 'feature',
  type: 'document',
  title: 'Feature',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'desc',
      type: 'array',
      validation: (Rule) => Rule.required(),
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
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          {title: 'Video', value: 'video'},
          {title: 'Image', value: 'image'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (shouldShow(document) === 'image' && currentValue === undefined)
            return 'Image Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
      hidden: ({document}) => {
        // use the shared function to decide whether to show the field
        return !(shouldShow(document) === 'image')
      },
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (shouldShow(document) === 'image' && currentValue === undefined)
            return 'Alt Text Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
      hidden: ({document}) => {
        // use the shared function to decide whether to show the field
        return !(shouldShow(document) === 'image')
      },
    },
    {
      name: 'video',
      type: 'url',
      title: 'Video',
      description: 'Must include the embedded URL/Link to the video, not just the regular URL',
      validation: (rule) =>
        rule.custom((currentValue, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if (shouldShow(document) === 'video' && currentValue === undefined)
            return 'Video URL Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
      hidden: ({document}) => {
        // use the shared function to decide whether to show the field
        return !(shouldShow(document) === 'video')
      },
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
      title: 'Link Text',
      name: 'link_text',
      type: 'string',
      hidden: ({document}) => {
        return document?.link_type === 'none' || !document?.link_type
      },
      validation: (Rule) =>
        Rule.custom((value, {document}) => {
          // in a custom validation rule, check if the field should be shown, and if yes, show an error if the value is not set
          if ((document.link_type !== 'none' || !document?.link_type) && value === undefined)
            return 'Link Text Required'
          // if we are not showing the field, or if the field has a value
          // then the validation passes
          return true
        }),
    },
    {
      title: 'Pages',
      name: 'page',
      description: 'Determines the page the feature will be displayed on',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Our Research', value: 'our-research'},
          {title: 'Resources & Equipment', value: 'resources-equipment'},
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
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      image: 'image',
      contentType: 'contentType',
    },
    prepare(selection) {
      const {title, order, image, contentType} = selection
      if (contentType === 'video') {
        return {
          title: title,
          subtitle: 'Display Order: ' + order,
          media: BsCameraVideo,
        }
      } else {
        return {
          title: title,
          subtitle: 'Display Order: ' + order,
          media: image,
        }
      }
    },
  },
}
