
import ButtonIcon from './ButtonIcon';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['search', 'heart', 'info', 'flag', 'logo', 'arrowRight'],
      },
      defaultValue: 'search',
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      defaultValue: 'primary',
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'search',
  type: 'primary',
};
