
import SearchBar from '/src/components/Molecules/SearchBar/SearchBar';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
