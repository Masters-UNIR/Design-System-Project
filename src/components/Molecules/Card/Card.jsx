import classnames from "classnames";
import Title from "../../Atoms/Title/Title";
import Text from "../../Atoms/Text/Text";
import IconSpec from "../../Molecules/IconSpec/IconSpec";
import Image from "../../Atoms/Image/Image";
import './Card.css';
import PropTypes from 'prop-types';


const Card = ({ alt, image, name, description, stock, price, cardStyle, iconStyle, darkMode }) => {
  const cardClassNames = classnames('card', {
    hasImage: image,
    'dark-mode': darkMode,
    'light-mode': !darkMode
  });

  return (
    <article className={cardClassNames} style={cardStyle}>
      {image && <Image source={image} altText={alt} />}
      <div className="details">
        <Title level="h3" text={name} variant={darkMode ? 'pink' : 'default'} />
        <Text text={description} variant={darkMode ? 'pink' : 'default'} />
        <footer>
          <IconSpec icon="flag" style={iconStyle}>{stock} pax.</IconSpec>
          <IconSpec icon="info" style={iconStyle}>{price} €</IconSpec>
        </footer>
      </div>
    </article>
  );
};

Card.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  cardStyle: PropTypes.object, // Estilos para el contenedor de Card
  iconStyle: PropTypes.shape({
    iconClass: PropTypes.string, // Clase CSS para el ícono
  }),
  darkMode: PropTypes.bool, //Modo oscuro por defecto
};
Card.defaultProps = {
  darkMode: true,
};
export default Card;
