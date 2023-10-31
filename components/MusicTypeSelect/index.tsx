import React from "react";

interface RadioBtnProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: () => void;
  checked: boolean;
}

// const RadioBtn: React.FC<RadioBtnProps> = ({ label, checked, onChange }) => {
//   return (
//     <label className={`flex gap-[10px] items-center cursor-pointer w-fit`}>
//       <div
//         className={`
//           w-[24px] h-[24px] rounded-full border-2 border-main-primary-color
//           ${checked ? "bg-main-primary-color text-white" : "bg-black text-black"}
//           flex items-center justify-center
//         `}
//       >
//         {checked && <span className="material-symbols-outlined check">check</span>}
//       </div>
//       <span className="text-[18px]">{label}</span>
//       <input type="radio" className="sr-only" checked={checked} onChange={onChange} />
//     </label>
//   );
// };

const RadioBtn: React.FC<RadioBtnProps> = ({ id, label, name, onChange, checked, value }) => {
  return (
    <label htmlFor={id} className="radiobutton-label">
      <input
        className="radiobutton-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className="custom-radiobutton" />
      {label}
    </label>
  );
};

export { RadioBtn };
