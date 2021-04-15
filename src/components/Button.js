import PropTypes from 'prop-types';
import './style.css';

function Button({ buttonName, clickHandler, buttonClass }) {
  return (
    <div>
      <button type="button" onClick={() => clickHandler({ buttonName })} className={buttonClass}>
        {buttonName}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  buttonClass: PropTypes.string.isRequired,
};

export default Button;
