import LoginForm from '../Organisms/LoginForm/LoginForm';
import Layout from '../Templates/Layout';
import Title from '../Atoms/Title/Title';



const LoginPage = () => {
  const darkMode = true; // Defino darkMode como true por defecto


  return (
    <Layout darkMode={darkMode}>
      <div>
        <Title level="h2" text={'Accede a tu dashboard'} variant={'pink'} />
        <LoginForm darkMode={darkMode} />
      </div>
    </Layout>
  );
};

export default LoginPage;