import { useState } from 'react';
import PropTypes from 'prop-types';
import Text from '/src/componentes/Atomos/Text/Text';
import Button from '/src/componentes/Atomos/Button/Button';
import './Dropdown.css';

const Dropdown = ({ options, buttonType }) => {
  const [selectedOption, setSelectedOption] = useState("Selecciona una opción");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <Button type={buttonType} onClick={toggleDropdown}>
        {selectedOption}</Button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              <Text text={option} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonType: PropTypes.oneOf('primary', 'secondary', 'tertiary'),
};

Dropdown.defaultProps = {
  buttonType: 'primary',
};

export default Dropdown;
