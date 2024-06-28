
import PropTypes from 'prop-types';

// Importando archivos PNG 
import SearchPNG from './search.png';
import HeartPNG from './heart.png';
import InfoPNG from './info.png';
import FlagPNG from './flag.png';
import LogoPNG from './logo.png';
import ArrowRightPNG from './arrowRight.png';

const Icon = ({ type }) => {
  return (
    <>
      {type === 'search' && (
        <>
          {/* Utiliza el archivo PNG */}
          <img src={SearchPNG} alt="Search" />
        </>
      )}
      {type === 'heart' && (
        <>
          {/* El SVG 'heart' da error*/}
          <img src={HeartPNG} alt="Heart" />
        </>
      )}
      {type === 'info' && (
        <>
          {/* El SVG 'info' da error */}
          <img src={InfoPNG} alt="Info" />
        </>
      )}
      {type === 'flag' && (
        <>
          {/* El SVG 'flag' daba error*/}
          <img src={FlagPNG} alt="Flag" />
        </>
      )}
      {type === 'logo' && (
        <>
          {/* El SVG 'logo' daba error*/}
          <img src={LogoPNG} alt="Logo" />
        </>
      )}
      {type === 'arrowRight' && (
        <>
          {/* El SVG 'arrowRight' daba error*/}
          <img src={ArrowRightPNG} alt="ArrowRight" />
        </>
      )}
    </>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf(['search', 'heart', 'info', 'flag', 'logo', 'ArrowRight']).isRequired,
};

export default Icon;
