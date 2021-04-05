import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div>
      <div>{result}</div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 'div',
};
export default Display;
