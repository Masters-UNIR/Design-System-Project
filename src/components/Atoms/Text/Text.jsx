import './Text.css'
import PropTypes from "prop-types";
import classnames from 'classnames';

const Text = ({ text, variant }) => {
  const textClass = classnames({
    'text': variant === 'default',
    'text-pink': variant === 'pink',
  });

  return <p className={textClass}>{text}</p>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'pink']),
};

Text.defaultProps = {
  variant: 'default',
};

export default Text;