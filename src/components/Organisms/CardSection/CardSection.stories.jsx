
import CardSection from '/src/components/Organisms/CardSection/CardSection';
import './CardSection.css';


export default {
  title: 'Organisms/CardSection', // Categoría y nombre del componente en Storybook
  component: CardSection,
  argTypes: {
    title: { control: 'text', defaultValue: 'Section Title' },
    subtitle: { control: 'text', defaultValue: 'Section Subtitle' },
    highlighted: { control: 'boolean', defaultValue: false },
    items: {
      control: 'object',
      defaultValue: [
        { alt: 'Alt Text 1', image: 'https://via.placeholder.com/150', name: 'Workshop 1', description: 'Description 1', stock: 10, price: 100 },
        { alt: 'Alt Text 2', image: 'https://via.placeholder.com/150', name: 'Workshop 2', description: 'Description 2', stock: 5, price: 200 },
        { alt: 'Alt Text 3', image: 'https://via.placeholder.com/150', name: 'Workshop 3', description: 'Description 3', stock: 2, price: 300 }
      ],
    },
    cardStyle: { control: 'object' }, // Prop para los estilos de CardSection
    iconStyle: { control: 'object' }, // Prop para los estilos de los íconos dentro de Card
  },
};

const Template = (args) => <CardSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Section Title',
  subtitle: 'Section Subtitle',
  highlighted: false,
  items: [
    { alt: 'Alt Text 1', image: 'https://via.placeholder.com/150', name: 'Workshop 1', description: 'Description 1', stock: 10, price: 100 },
    { alt: 'Alt Text 2', image: 'https://via.placeholder.com/150', name: 'Workshop 2', description: 'Description 2', stock: 5, price: 200 },
    { alt: 'Alt Text 3', image: 'https://via.placeholder.com/150', name: 'Workshop 3', description: 'Description 3', stock: 2, price: 300 }
  ],
  cardStyle: {}, // Añade los estilos deseados para CardSection
  iconStyle: { iconClass: 'icon-card' }, // Clase CSS para ajustar tamaño de íconos dentro de Card
};
