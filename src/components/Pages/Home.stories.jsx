
import Home from '/src/components/Pages/Home.jsx';
import Layout from '/src/components/Templates/Layout';



export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => (
  <Layout {...args}>
    <Home />
  </Layout>
);

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true,
};

export const LightMode = Template.bind({});
LightMode.args = {
  darkMode: false,
};
