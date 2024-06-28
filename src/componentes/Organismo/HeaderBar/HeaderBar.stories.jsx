import HeaderBar from './HeaderBar';
import './HeaderBar.css';

export default {
  title: 'Organismo/HeaderBar', // Categoría y nombre del componente en Storybook
  component: HeaderBar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
      defaultValue: 'light',
    },
    search: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => <HeaderBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'light',
  search: false,
};
