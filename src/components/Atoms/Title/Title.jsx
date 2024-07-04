import './Title.css';
import PropTypes from "prop-types";

const Title = ({ level, text }) => {
  return (
    <>
      {level === 'h1' && <h1>{text}</h1>}
      {level === 'h2' && <h2>{text}</h2>}
      {level === 'h3' && <h3>{text}</h3>}
    </>
  );
};
Title.propTypes = {
  text: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default Title;