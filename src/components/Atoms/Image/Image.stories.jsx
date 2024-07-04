import React from 'react';
import Image from './Image'; // Ajusta la ruta según la estructura de tu proyecto

export default {
    title: 'Atoms/Image', // Categoría y nombre del componente en Storybook
    component: Image,
    argTypes: {
        source: {
            control: 'text',
            defaultValue: 'https://via.placeholder.com/150', // Imagen por defecto
        },
        altText: {
            control: 'text',
            defaultValue: 'Placeholder Image',
        },
    },
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
    source: 'https://via.placeholder.com/150',
    altText: 'Placeholder Image',
};
