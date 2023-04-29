import { CollectionConfig } from "payload/types";
import { isAdminHasSiteAccessOrPublished } from "../access/isAdminHasSiteAccessOrPublished";
import { TextBlock, MathEnvironment } from "../blocks";
import formatSlug from "../utilities/formatSlug";

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
            required: true, 
            admin: {
                position: 'sidebar', 
            }, 
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
            label: 'Article Summary',
            name: 'summary', 
            type: 'richText', 
        },
        {
            label: 'Image cover URL', 
            name: 'imageUrl', 
            type: 'text', 
            required: true, 
        },
        {
            label: 'Layout Blocks', 
            name: 'layout', 
            type: 'blocks',   
            minRows: 1, 
            blocks: [
                TextBlock,
                MathEnvironment,
            ]
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
        },
        {
            name: 'slug', 
            type: 'text', 
            required: true, 
            index: true,
            admin: {
                position: 'sidebar', 
            }, 
            hooks: {
                beforeValidate: [formatSlug('title')]
            }
        }
    ]
}


export default Articles