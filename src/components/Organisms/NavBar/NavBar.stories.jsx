import NavBar from './NavBar';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
