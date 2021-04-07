import PropTypes from 'prop-types';

function Button({ buttonName, clickHandler }) {
  return (
    <div>
      <button type="button" onClick={() => clickHandler(buttonName)}>
        {buttonName}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
