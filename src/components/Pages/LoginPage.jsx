import LoginForm from '../Organisms/LoginForm/LoginForm';
import Layout from '../Templates/Layout';
import Title from '../Atoms/Title/Title';



const LoginPage = () => {



  return (
    <Layout>
      <div>
        <Title level="h2" text={'Accede a tu dashboard'} variant={'pink'} />
        <LoginForm darkMode={true} />
      </div>
    </Layout>
  );
};

export default LoginPage;