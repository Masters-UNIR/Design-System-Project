import { ReactComponent as Search } from './search.svg';
import { ReactComponent as Heart } from './heart.svg';
import { ReactComponent as Info } from './info.svg';
import { ReactComponent as Flag } from './flag.svg';
import { ReactComponent as Logo } from './logo.svg';
import PropTypes from "prop-types";

const Icon = ({ type }) => {
  return (
    <>
      {type === 'search' && <Search />}
      {type === 'heart' && <Heart />}
      {type === 'info' && <Info />}
      {type === 'flag' && <Flag />}
      {type === 'logo' && <Logo />}
    </>
  );
};
Icon.propTypes = {
  type: PropTypes.oneOf(['search', 'heart', 'info', 'flag', 'logo']).isRequired,
};

export default Icon;