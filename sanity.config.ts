import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import Logo from './components/Logo';
import StudioNavbar from './components/StudioNavbar';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: 'default',
  title: 'Ingigante Property Management',
  basePath: '/admin', // ← instead of '/studio'

  projectId,
  dataset,

  plugins: [
    deskTool(),
    visionTool(),
    // ✅ No need to include googleMapsInput here
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
