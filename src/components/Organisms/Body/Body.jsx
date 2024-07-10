
import './Body.css';
import PropTypes from "prop-types";
import Button from '../../Atoms/Button/Button';
import CardSection from '../CardSection/CardSection';
import Separator from '../../Atoms/Separator/Separator';

const Body = ({ darkMode }) => {
  const bodyClasses = darkMode ? 'body dark' : 'body light';

  const cardSectionItems = [
    {
      name: 'Workshop 1',
      description: 'Descripción del Workshop 1',
      stock: 10,
      price: 50,
      image: '/path-to-image/product1.jpg',

    },
    {
      name: 'Workshop 2',
      description: 'Descripción del Workshop 2',
      stock: 15,
      price: 70,
      image: '/path-to-image/product2.jpg',

    },
    // Agregar más workshops según sea necesario
  ];



  return (
    <div className={bodyClasses}>
      <div className="column column-1">
        {/* Renderizar los botones */}
        <h2>Columna 1</h2>
        <p>Contenido de la columna 1</p>
        <Button type="primary">Botón 1</Button>
        <Separator />
        <Button type="tertiary">Botón 2</Button>
        <Separator />
        <Button type="tertiary">Botón 3</Button>
        <Separator />
        <Button type="tertiary">Botón 4</Button>
        <Separator />
      </div>
      <div className="column column-2">
        {/* Renderizar las secciones de CardSection */}
        <h2>Columna 2</h2>
        <p>Contenido de la columna 2</p>
        <CardSection
          title="Proyectos Destacados"
          subtitle="Revisa los workshops de tus proyectos activos"
          items={cardSectionItems}
          highlighted={true}
          darkMode={darkMode} //Pasamos darkMode a CardSection
        />
      </div>
    </div>
  );
};

Body.propTypes = {

  darkMode: PropTypes.bool,
};

Body.defaultProps = {
  darkMode: true,  // Modo oscuro por defecto
};

export default Body;

