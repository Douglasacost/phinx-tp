import React from 'react';
import { Popconfirm, Icon } from 'antd';

const Confirm = ({ question, icon, color, text, onConfirm }) => (<Popconfirm
    title={question || 'Are you sure?'}
    onConfirm={onConfirm}
    icon={<Icon type={ icon || "question-circle-o"} style={{ color: color || 'red' }} />}
>
    <a href="#">{text}</a>
</Popconfirm>)

export default Confirm;