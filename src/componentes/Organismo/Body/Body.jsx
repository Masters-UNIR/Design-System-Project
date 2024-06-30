import React from 'react';
import './Body.css';
import PropTypes from "prop-types";

const Body = ({ children, darkMode }) => {
  const bodyClasses = darkMode ? 'body dark' : 'body light';
  // Convierto children en un array para asegurar que siempre sea un array
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={bodyClasses}>
      <div className="column column-1">
        {/* Filtrar childrenArray por la clave 'buttons' */}
        {childrenArray.filter(child => child.key === 'buttons')}
      </div>
      <div className="column column-2">
        {/* Filtrar childrenArray por la clave 'cardSections' */}
        {childrenArray.filter(child => child.key === 'cardSections')}
      </div>
    </div>
  );
};
Body.propTypes = {
  children: PropTypes.node,
  darkMode: PropTypes.bool,
};

export default Body;
