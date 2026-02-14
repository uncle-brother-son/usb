import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Site',
  type: 'document',
  fields: [
    defineField({
      name: 'slogan',
      title: 'Slogan',
      type: 'string',
      description: 'The main slogan displayed on the homepage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address for the "Get in Touch" link',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'emailCta',
      title: 'Email CTA Text',
      type: 'string',
      description: 'Call-to-action text for the email link',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Meta title for search engines and social sharing',
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search engines and social sharing',
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image',
      type: 'image',
      description: 'Image for social sharing (1200x630px recommended)',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'slogan',
    },
  },
})
