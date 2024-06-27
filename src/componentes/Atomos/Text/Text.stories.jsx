import React from 'react';
import Text from './Text';
import './Text.css';

export default {
    title: 'Atomos/Text', // Categoría y nombre del componente en Storybook
    component: Text,
    argTypes: {
        text: { control: 'text' }, // Control para editar el texto en Storybook
    },
};

const Template = (args) => <Text {...args} />;

export const Example = Template.bind({});
Example.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Ejemplo 
};