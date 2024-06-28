import './TitleHeader.css'
import Title from '/src/componentes/Atomos/Title/Title'
import PropTypes from 'prop-types';

const TitleHeader = ({ title, subtitle }) => {
  return (
    <header>
      <Title level="h2" text={title}>{title}</Title>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleHeader