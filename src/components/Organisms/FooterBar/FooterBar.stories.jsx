import FooterBar from './FooterBar';
import './FooterBar.css';

export default {
  title: 'Organisms/FooterBar', // Categoría y nombre del componente en Storybook
  component: FooterBar,
  argTypes: {
    fixed: { control: 'boolean' }, // Control para cambiar la prop `fixed`
  },
};

const Template = (args) => <FooterBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  fixed: false, // Valor inicial para `fixed`
};
