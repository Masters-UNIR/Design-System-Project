
import PropTypes from 'prop-types';

// Importando archivos PNG 
import SearchPNG from './search.png';
import HeartPNG from './heart.png';
import InfoPNG from './info.png';
import FlagPNG from './flag.png';
import LogoPNG from './logo.png';
import ArrowRightPNG from './arrowRight.png';

const Icon = ({ type }) => {
  const icons = {
    search: SearchPNG,
    heart: HeartPNG,
    info: InfoPNG,
    flag: FlagPNG,
    logo: LogoPNG,
    arrowRight: ArrowRightPNG,
  };

  return <img src={icons[type]} alt={type} />;
};

Icon.propTypes = {
  type: PropTypes.oneOf(['search', 'heart', 'info', 'flag', 'logo', 'arrowRight']).isRequired,
};

export default Icon;
