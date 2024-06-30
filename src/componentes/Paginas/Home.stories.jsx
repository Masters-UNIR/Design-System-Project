
import Home from '/src/componentes/Paginas/Home.jsx';
import Layout from '/src/componentes/Plantilla/Layout';



export default {
  title: 'Paginas/Home',
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
