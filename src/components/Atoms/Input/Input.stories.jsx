
import Input from './Input';
import './Input.css'

export default {
    title: 'Atoms/Input', // Categoría y nombre del componente en Storybook
    component: Input,
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['text', 'password', 'email', 'number'], // Opciones disponibles para 'type'
            },
            defaultValue: 'text',
        },
        placeholder: { control: 'text', defaultValue: 'Introduce texto aqui...' },
    },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'text',
    placeholder: 'Introduce texto aqui...',
};