import classnames from 'classnames';
import Text from '/src/components/Atoms/Text/Text';
import './FooterBar.css';
import PropTypes from 'prop-types';

const FooterBar = ({ fixed }) => {

  const footerClasses = classnames('footerBar', {
    fixed: fixed
  })

  return (
    <footer className={footerClasses}>
      <Text text={'@Todos los derechos reservados'} variant={'pink'} />
    </footer>
  )
}
FooterBar.propTypes = {
  fixed: PropTypes.bool.isRequired,
};
export default FooterBar;