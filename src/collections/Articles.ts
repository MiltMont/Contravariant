import { CollectionConfig } from "payload/types";
import { isAdminHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";

const Articles: CollectionConfig = {
    slug: 'articles', 
    admin: {
        defaultColumns: ['title', 'date', 'author', 'status', 'categories'], 
        useAsTitle: 'title', 
    }, 
    access: {
        // Admins or editor with site access can raead, 
        // otherwhise users not logged in can only read published. 
        read: isAdminHasSiteAccessOrPublished, 
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
            name: 'content', 
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