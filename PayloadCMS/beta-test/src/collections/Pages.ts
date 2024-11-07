import { CollectionConfig } from 'payload'
import { Cover } from '../blocks/cover/schema.ts'
import { Image } from '../blocks/image/schema.ts'
import { RichText } from '../blocks/richText/schema.ts'

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'slug', label: 'Slug', type: 'text', required: true, admin: { position: 'sidebar' } },
    {
      name: 'layout',
      label: 'Layout',
      type: 'blocks',
      required: true,
      blocks: [Cover, Image, RichText],
    },
  ],
}
