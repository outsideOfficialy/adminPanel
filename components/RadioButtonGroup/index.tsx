import "./style.css";

interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
}

interface RadioButtonGroupProps {
  group: RadioButtonProps[];
  title?: string;
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

const RadioGroup: React.FC<RadioButtonGroupProps> = ({
  group, title
}) => {
  return <div className="flex flex-col gap-[15px] md:gap-[10px]">
    {title && <h3 className="text-white text-[20px] md:text-2xl font-normal leading-6 tracking-wider">{title}</h3>}
    <div className="flex flex-col gap-[10px]">
      {group.map((el, idx) => {
        return <RadioButton key={idx} id={el.id} label={el.label} name={el.name} value={el.value} />
      })}
    </div>
  </div>
}

export { RadioButton, RadioGroup };
