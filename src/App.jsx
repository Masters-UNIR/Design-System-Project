import { useState } from 'react';
import Button from './componentes/Atomos/Button/Button';
import Dropdown from './componentes/Moleculas/Dropdown/Dropdown';
import Separator from './componentes/Atomos/Separator/Separator.jsx';
import LoginForm from './componentes/Moleculas/LoginForm/LoginForm.jsx';
import CardSection from './componentes/Organismo/CardSection/CardSection';
import SearchBar from './componentes/Moleculas/SearchBar/SearchBar.jsx';
import BarChart from './componentes/Moleculas/BarChart/BarChart.jsx'

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
      <Separator />
      <p>Selecciona una opción</p>
      <Dropdown onClick={toggleDropdown} options={(['Proyecto1', 'Proyecto2', 'Proyecto3'])}></Dropdown>
      <Separator />
      <LoginForm />
      <Separator />
      <SearchBar />
      <Separator />
      <CardSection cardStyle={{}}
        iconStyle={{
          iconClass: 'icon-card'
        }}
        items={[
          {
            alt: 'Alt Text 1',
            description: 'Description 1',
            image: 'https://via.placeholder.com/150',
            name: 'Workshop 1',
            price: 100,
            stock: 10
          },
          {
            alt: 'Alt Text 2',
            description: 'Description 2',
            image: 'https://via.placeholder.com/150',
            name: 'Workshop 2',
            price: 200,
            stock: 150
          },
          {
            alt: 'Alt Text 3',
            description: 'Description 3',
            image: 'https://via.placeholder.com/150',
            name: 'Workshop 3',
            price: 300,
            stock: 200
          },
          {
            alt: 'Alt Text 4',
            description: 'Description 4',
            image: 'https://via.placeholder.com/150',
            name: 'Workshop 4',
            price: 300,
            stock: 200
          }
        ]}
        subtitle="Workshops activos"
        title="Proyecto 1" />
      <Separator />
      <BarChart data={[
        {
          label: 'ENE',
          value: 50
        },
        {
          label: 'FEB',
          value: 75
        },
        {
          label: 'MAR',
          value: 30
        },
        {
          label: 'ABR',
          value: 90
        },
        {
          label: 'MAY',
          value: 100
        }
      ]}
      />

    </div>
  );
};

export default App;
