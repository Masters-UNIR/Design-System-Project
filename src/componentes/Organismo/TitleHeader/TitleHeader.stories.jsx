import TitleHeader from "./TitleHeader";
import './TitleHeader.css';


export default {
  title: 'Organismo/TitleHeader', // Categoría y nombre del componente en Storybook
  component: TitleHeader,
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Título Principal',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'Subtítulo opcional',
    },
  },
};

const Template = (args) => <TitleHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Título Principal',
  subtitle: 'Subtítulo opcional',
};
