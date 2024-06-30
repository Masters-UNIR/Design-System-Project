import PropTypes from 'prop-types';
import './BarChart.css';

const BarChart = ({ data }) => {
  return (
    <div className="bar-chart">
      {data.map((item, index) => (
        <div key={index} className="bar" style={{ height: `${item.value}%` }}>
          <span className="bar-label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChart;
