import { useState } from 'react';
import Input from '/src/components/Atoms/Input/Input';
import Button from '/src/components/Atoms/Button/Button';
import Text from '/src/components/Atoms/Text/Text';
import './LoginForm.css';
import PropTypes from "prop-types";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit({ username, password });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Text tag="label" htmlFor="username">Nombre de usuario</Text>
      <Input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Introduce tu nombre de usuario"
      />
      <Text tag="label" htmlFor="password">Contraseña</Text>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Introduce tu contraseña"
      />
      <Button type="primary" htmlType="submit">Enviar</Button>
    </form>
  );
};
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default LoginForm;
