import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName } = props;
  return (
    <div>
      <button type="button">
        {buttonName}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: 'button',
};

export default Button;
