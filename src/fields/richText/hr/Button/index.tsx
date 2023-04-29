import React, {useCallback } from 'react';
import { Transforms } from 'slate';
import { useSlate, ReactEditor } from 'slate-react';
import { ElementButton } from 'payload/components/rich-text';

const baseClass = 'rich-text-hr-button';

const insertButton = (editor) => {
  const text = { text: ' ' };
  const button = {
    type: 'hr',
    children: [
      text,
    ],
  };

  const nodes = [button, { children: [{ text: '' }] }];

  if (editor.blurSelection) {
    Transforms.select(editor, editor.blurSelection);
  }

  Transforms.insertNodes(editor, nodes);
  ReactEditor.focus(editor);
};

const ToolbarButton: React.FC<{ path: string }> = () => {
  return (
    <ElementButton
      className={baseClass}
      format="hr"
    >
      —
    </ElementButton>
  );
};

export default ToolbarButton;