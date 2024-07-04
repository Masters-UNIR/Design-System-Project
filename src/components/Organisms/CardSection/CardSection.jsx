import classnames from "classnames";
import Card from '/src/components/Molecules/Card/Card';
import TitleHeader from '/src/components/Organisms/TitleHeader/TitleHeader';
import './CardSection.css';
import PropTypes from 'prop-types';

const CardSection = ({ title, subtitle, items = [], highlighted = false, cardStyle, iconStyle }) => {
  const cardsSliderClassnames = classnames('cards-slider', {
    special: highlighted
  });



  return (
    <section className={cardsSliderClassnames}>
      <TitleHeader title={title} subtitle={subtitle} />
      <div className="slider">
        {items.map((item, idx) => (
          <Card key={idx} {...item} cardStyle={cardStyle} iconStyle={iconStyle} />
        ))}
      </div>
    </section>
  );
};

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  highlighted: PropTypes.bool,
  cardStyle: PropTypes.object, // Estilos para las Card
  iconStyle: PropTypes.object, // Estilos para los íconos dentro de las Card
};

export default CardSection;
