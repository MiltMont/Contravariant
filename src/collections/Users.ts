import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      type: 'text', 
      label: 'User Name'
    },
    {
      name: 'roles', 
      type: 'select', 
      hasMany: true, 
      defaultValue: ['editor'], 
      required: true, 
      options: ['admin', 'editor'],
    },
  ],
};

export default Users;