import { useState } from 'react';
import Button from './componentes/Atomos/Button/Button';
import Dropdown from './componentes/Moleculas/Dropdown/Dropdown'

//Componente App

const App = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isOpen, setIsOpen] = useState('');

  //Genero un evento para mostrar nombre de usuario. Cuando introduces tu nombre en el campo de texto te lo muestra en pantalla

  const nombre = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    // Cuando se hace clic en el botón, actualiza el texto que se muestra en el h1
    setDisplayText(inputText);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1> Kaixo {displayText}!</h1>
      <p>Introduce tu nombre</p>
      <input type="text" onChange={nombre} />
      <Button onClick={handleButtonClick} />
      <p>Selecciona una opción</p>
      <Dropdown onClick={toggleDropdown}></Dropdown>
    </div>
  );
};

export default App;
