
import LoginForm from './LoginForm';

export default {
  title: 'Organisms/LoginForm',
  component: LoginForm,
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSubmit: (data) => alert(`Username: ${data.username}, Password: ${data.password}`),
};
