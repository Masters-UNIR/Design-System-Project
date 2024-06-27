
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  buttonType: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  buttonType: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  buttonType: 'tertiary',
};
