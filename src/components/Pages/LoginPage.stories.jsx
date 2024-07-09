import Layout from '../Templates/Layout';
import LoginForm from '../Organisms/LoginForm/LoginForm';
import LoginPage from '../Pages/LoginPage';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
};

const Template = (args) => (
  <Layout {...args}>
    <LoginForm />
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
