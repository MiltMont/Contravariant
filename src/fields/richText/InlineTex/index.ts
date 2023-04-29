import Button from "./Button";
import Leaf from "./Leaf"; 
import withInlineTex from "./plugin";

export default {
    name: 'InlineTex', 
    Button, 
    Leaf, 
    plugins: [
        withInlineTex, 
    ]
}