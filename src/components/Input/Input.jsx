import style from "./Input.module.scss";
const Input = ({ placeholder, type, ...otherProps }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type={type}
      {...otherProps}
    />
  );
};

export default Input;
