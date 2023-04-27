import { buildConfig } from 'payload/config';
import path from 'path';
import { Categories, Articles, Users } from './collections';
import { payloadCloud } from '@payloadcms/plugin-cloud';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  cors: '*', 
  collections: [
    Articles, 
    Categories, 
    Users,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
