import PropTypes from 'prop-types';
import './style.css';

const Display = ({ total, next, operation }) => (
  <div className="display">
    <h1>CALCULATOR</h1>
    <h2>
      {total}
      {operation}
      {next}
    </h2>

  </div>
);

Display.defaultProps = {
  total: '0',
  next: undefined,
  operation: undefined,
};

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,

};

export default Display;
