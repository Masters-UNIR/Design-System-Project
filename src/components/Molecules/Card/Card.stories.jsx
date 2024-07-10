
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    alt: {
      control: 'text',
      defaultValue: 'Descripción imagen',
    },
    image: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/150',
    },
    name: {
      control: 'text',
      defaultValue: 'Nombre de contenido',
    },
    description: {
      control: 'text',
      defaultValue: 'Descripción de contenido.',
    },
    stock: {
      control: 'number',
      defaultValue: 10,
    },
    price: {
      control: 'number',
      defaultValue: 99.99,
    },
    darkMode: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const LightMode = Template.bind({});
LightMode.args = {
  alt: 'Descripción imagen',
  image: 'https://via.placeholder.com/150',
  name: 'Nombre de contenido',
  description: 'Descripción de contenido.',
  stock: 10,
  price: 99.99,
  darkMode: false,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  alt: 'Descripción imagen',
  image: 'https://via.placeholder.com/150',
  name: 'Nombre de contenido',
  description: 'Descripción de contenido.',
  stock: 10,
  price: 99.99,
  darkMode: true,
};
