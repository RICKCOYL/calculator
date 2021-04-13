import PropTypes from 'prop-types';

const Button = ({ buttonName, clickHandler }) => (
  <div>
    <button type="button" onClick={() => clickHandler({ buttonName })} className="btn-block btn-primary">
      {buttonName}
    </button>
  </div>
);

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
