
import Text from './Text';
import './Text.css';

export default {
    title: 'Atoms/Text', // Categoría y nombre del componente en Storybook
    component: Text,
    argTypes: {
        text: { control: 'text', defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }, // Control para editar el texto en Storybook
        variant: {
            control: 'select',
            options: ['default', 'pink'],
            defaultValue: 'default',
        },
    },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Ejemplo 
    variant: 'default',
};

export const PinkText = Template.bind({});
PinkText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Ejemplo 
    variant: 'pink',
};