import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {structure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'neuroxr',

  projectId: '0m0o2jn4',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
