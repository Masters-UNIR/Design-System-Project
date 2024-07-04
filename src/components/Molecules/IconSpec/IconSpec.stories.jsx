import IconSpec from './IconSpec';

export default {
  title: 'Molecules/IconSpec',
  component: IconSpec,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Descripción icono',
    },
    icon: {
      control: {
        type: 'select',
        options: ['search', 'heart', 'info', 'flag', 'logo', 'ArrowRight'],
      },
      defaultValue: 'search',
    },
  },
};

const Template = (args) => <IconSpec {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Descripción icono',
  icon: 'search',
};
