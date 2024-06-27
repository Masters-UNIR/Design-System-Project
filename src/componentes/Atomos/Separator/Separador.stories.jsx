import React from 'react';
import Separator from './Separator';
import './Separator.css';

export default {
    title: 'Atomos/Separator', // Categoría y nombre del componente en Storybook
    component: Separator,
};

const Template = (args) => <Separator {...args} />;

export const Default = Template.bind({});
Default.args = {};
