
import HeaderBar from '/src/components/Organisms/HeaderBar/HeaderBar';
import FooterBar from '/src/components/Organisms/FooterBar/FooterBar';

import './Layout.css';
import PropTypes from "prop-types";


const Layout = ({ children, darkMode }) => {
  const layoutClasses = darkMode ? 'layout dark' : 'layout light';

  return (
    <div className={layoutClasses}>
      <HeaderBar variant={darkMode ? 'dark' : 'light'} />
      {children}
      <FooterBar fixed={true} />
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
  darkMode: PropTypes.bool,
};

Layout.defaultProps = {
  darkMode: true, //Por defecto estamos en darkMode
}
export default Layout;
