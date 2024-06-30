import classnames from "classnames";
import Title from "../../Atomos/Title/Title";
import Text from "../../Atomos/Text/Text";
import IconSpec from "../../Moleculas/IconSpec/IconSpec";
import Image from "../../Atomos/Image/Image";
import './Card.css';
import PropTypes from 'prop-types';


const Card = ({ alt, image, name, description, stock, price, cardStyle, iconStyle }) => {
  const cardClassNames = classnames('card', {
    hasImage: image
  });

  return (
    <article className={cardClassNames} style={cardStyle}>
      {image && <Image source={image} altText={alt} />}
      <div className="details">
        <Title level="h3" text={name} />
        <Text text={description} />
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
};

export default Card;
