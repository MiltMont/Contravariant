import React from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

const Leaf: React.FC<any> = ({attributes, children}) => (
    <MathJaxContext>
        <MathJax>{`\\( ${children} \\)`}</MathJax>
    </MathJaxContext>
)

export default Leaf