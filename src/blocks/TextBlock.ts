import { Block } from "payload/types"

const TextBlock: Block = {
    slug: 'content',
    fields: [
        {
            label: 'Rich Text', 
            name: 'content', 
            type: 'richText', 
        }, 
    ] , 

}

export default TextBlock