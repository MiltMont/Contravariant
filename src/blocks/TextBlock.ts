import { Block } from "payload/types"
import richText from "../fields/richText"
import InlineTex from "../fields/richText/InlineTex"
import hr from "../fields/richText/hr"


const TextBlock: Block = {
    slug: 'content',
    fields: [
        richText({}, {
            elements: [
                hr, 
            ],
            leaves: [
                InlineTex, 
            ]
        })
    ] , 

}

export default TextBlock