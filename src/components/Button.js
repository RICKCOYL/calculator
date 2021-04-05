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

export default Button;
