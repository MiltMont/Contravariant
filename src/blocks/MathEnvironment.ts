import { Block } from "payload/types";


const MathEnvironment: Block = {
    slug: 'mathEnvironment', 
    fields: [
        {   
            label: 'Environment Type', 
            name: 'environmentType', 
            type: 'radio', 
            required: true, 
            options: [
                {
                    label: 'Theorem', 
                    value: 'theorem', 
                },
                {
                    label: 'Definition', 
                    value: 'definition',
                },
                {
                    label: 'Proposition', 
                    value: 'proposition', 
                }, 
                {
                    label: 'Corollary', 
                    value: 'corollary', 
                }, 
                {
                    label: 'Lemma', 
                    value: 'lemma', 
                },
                {
                    label: 'Example', 
                    value: 'example', 
                }, 
                {
                    label: 'Exercise', 
                    value: 'exercise', 
                },
            ], 
            defaultValue: 'theorem', 

        }, 
        {
            name: 'label', 
            type: 'text', 
        }, 
        {
            name: 'content', 
            type: 'richText', 
        }
    ]
}

export default MathEnvironment