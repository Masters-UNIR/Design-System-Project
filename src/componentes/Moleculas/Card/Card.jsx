import classnames from "classnames";
import Title from "../../Atomos/Title/Title";
import Text from "../../Atomos/Text/Text";
import IconSpec from "../../Moleculas/IconSpec/IconSpec";
import Image from "../../Atomos/Image/Image";
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ alt, image, name, description, stock, price }) => {

  const cardClassNames = classnames('card', {
    hasImage: image
  })

  return (
    <article className={cardClassNames}>
      {image && <Image source={image} altText={alt} />}
      <div className="details">
        <Title level="h3" text={name} />
        <Text text={description} />
        <footer>
          <IconSpec icon="flag">{stock} uds.</IconSpec>
          <IconSpec icon="info">{price} €</IconSpec>
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
};

export default Card;