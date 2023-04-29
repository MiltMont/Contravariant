import React from 'react'
import { Transforms } from 'slate'
import { useSlate, ReactEditor } from 'slate-react'
import { LeafButton } from 'payload/components/rich-text';
import Icon from '../Icon';

const Button = () => <LeafButton format="inlineTex" children={"lambda"}><Icon /></LeafButton>

export default Button