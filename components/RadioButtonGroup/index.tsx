import "./style.css";

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ id, label, name, value }) => {
  return (
    <label htmlFor={id} className="radiobutton-label">
      <input className="radiobutton-input" type="radio" name={name} id={id} value={value} />
      <span className="custom-radiobutton" />
      {label}
    </label>
  );
};

export { RadioButton };
