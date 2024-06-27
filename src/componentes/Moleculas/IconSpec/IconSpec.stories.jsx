
import IconSpec from './IconSpec';

export default {
  title: 'Moleculas/IconSpec',
  component: IconSpec,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Specification Text',
    },
    icon: {
      control: {
        type: 'select',
        options: ['search', 'heart', 'info', 'flag', 'logo'], // Ajusta según los íconos disponibles
      },
      defaultValue: 'search',
    },
  },
};

const Template = (args) => <IconSpec {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Specification Text',
  icon: 'search',
};
