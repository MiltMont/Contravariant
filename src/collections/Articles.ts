import { CollectionConfig } from "payload/types";

const Articles: CollectionConfig = {
    slug: 'articles', 
    admin: {
        defaultColumns: ['title', 'date', 'author', 'status', 'categories'], 
        useAsTitle: 'title', 
    }, 
    access: {
        read: () => true, 
    }, 
    fields: [
        {
            name: 'title', 
            type: 'text',
        }, 
        {
            name: 'author', 
            type: 'relationship', 
            relationTo: 'users', 
        }, 
        {
            name: 'publishedDate', 
            type: 'date', 
        }, 
        {
            name: 'category', 
            type: 'relationship', 
            relationTo: 'categories', 
            hasMany: false, 
        }, 
        {
            name: 'contant', 
            type: 'richText', // Must modify this!
        },
        { 
            name: 'status', 
            type: 'select', 
            options: [
                {
                    value: 'draft', 
                    label: 'Draft', 
                }, 
                {
                    value: 'published', 
                    label: 'Published', 
                }, 
            ], 
            defaultValue: 'draft', 
            admin: {
                position: 'sidebar', 
            }
        }
    ]
}

export default Articles