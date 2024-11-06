import type { CollectionConfig } from 'payload'

export const Footer: CollectionConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'link', label: 'Link', type: 'text' },
      ],
      minRows: 1,
      maxRows: 5,
    },
    {
      name: 'copywright',
      label: 'Copywright',
      type: 'text',
      required: true,
    },
  ],
}
