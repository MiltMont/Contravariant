const withInlineTex = (incomingEditor) => {
    const editor = incomingEditor; 
    const {shouldBreakOutOnEnter} = editor; 

    editor.shouldBreakOutOnEnter = (element) => (element.type === 'inlineTex' ? true : shouldBreakOutOnEnter(element)); 

    return editor; 
}; 

export default withInlineTex