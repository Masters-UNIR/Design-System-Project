import { useState } from 'react';
import Button from './componentes/Atomos/Button';


const App = () => {
  const [inputText, setInputText] = useState('');
  /*Genero un evento para mostrar nombre de usuario*/
  const nombre = (e) => {
    setInputText(e.target.value);
  };


  return (
    <div>
      <h1> Kaixo {inputText}!</h1>
      <input type="text" onChange={nombre} />
      <Button />
    </div>
  );
};

export default App;
