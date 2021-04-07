import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <>
    <h1>
      {total}
      {operation}
      {next}
    </h1>

  </>
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
