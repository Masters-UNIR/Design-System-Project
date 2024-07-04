
import Icon from './Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  type: 'search',
};

export const Heart = Template.bind({});
Heart.args = {
  type: 'heart',
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
};

export const Flag = Template.bind({});
Flag.args = {
  type: 'flag',
};

export const Logo = Template.bind({});
Logo.args = {
  type: 'logo',
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  type: 'ArrowRight',
};
