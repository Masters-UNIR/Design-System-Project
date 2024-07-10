
import Title from './Title';
import './Title.css';

export default {
    title: 'Atoms/Title', // Categoría y nombre del componente en Storybook
    component: Title,
    argTypes: {
        text: { control: 'text' },
        level: {
            control: {
                type: 'select',
                options: ['h1', 'h2', 'h3'], // Opciones disponibles para 'level'
            },
        },
        variant: {
            control: 'select',
            options: ['default', 'pink'],
            defaultValue: 'default',
        },
    },
};

const Template = (args) => <Title {...args} />;

export const Example = Template.bind({});
Example.args = {
    text: 'Title Text',
    level: 'h1', // Cambio de nivel estilo
};

export const PinkTitle = Template.bind({});// Ejemplo 
PinkTitle.args = {
    text: 'Title Text',
    level: 'h3',
    variant: 'pink',
};