import React from "react";

type Color = "primary" | "secondary" | "custom";

type Props = {
  label: string;
  color: Color;
  border?: boolean;
};

const Button = ({ label, color, border }: Props) => {
  if (color === "primary" && border) {
    return (
      <button className="border px-4 py-[10px] font-semibold rounded-[6px] border-primary text-primary">
        {label}
      </button>
    );
  } else if (color === "primary" && !border) {
    return (
      <button className="bg-primary px-4 py-[10px] font-semibold text-white rounded-[6px]">
        {label}
      </button>
    );
  } else if (color === "secondary") {
    return <button className="px-4 py-[10px] font-semibold">{label}</button>;
  }

  return <button>{label}</button>;
};

export default Button;
