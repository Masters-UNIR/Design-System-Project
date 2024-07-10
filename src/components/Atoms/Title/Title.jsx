import './Title.css';
import PropTypes from "prop-types";
import classnames from 'classnames';

const Title = ({ level, text, variant }) => {
  const TitleClass = classnames({
    'h3': variant === 'default',
    'h3-pink': variant === 'pink',
  })
  return (
    <>

      {level === 'h1' && <h1 className={TitleClass}>{text}</h1>}
      {level === 'h2' && <h2 className={TitleClass}>{text}</h2>}
      {level === 'h3' && <h3 className={TitleClass}>{text}</h3>}
    </>
  );
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.oneOf(['h1', 'h2', 'h3']).isRequired,
  variant: PropTypes.oneOf(['default', 'pink'])
};

Title.defaultProps = {
  variant: 'default',
};

export default Title;