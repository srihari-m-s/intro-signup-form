import errorIcon from "../assets/icon-error.svg";

export default function FormInput(props) {
  const { placeholder, id } = props;

  return (
    <div className="input-container">
      <input {...props} className="form__input" required />
      <p className="error">
        <em></em>
      </p>
      <img src={errorIcon} alt="error icon" className="error-icon" />
    </div>
  );
}
