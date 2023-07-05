import React from "react";

type Color = "primary" | "secondary" | "custom";

type Props = {
  label: string;
  color: Color;
  border?: boolean;
  className?: string;
};

const Button = ({ label, color, border, className }: Props) => {
  if (color === "primary" && border) {
    return (
      <button className="border px-4 py-[10px] font-semibold text-12 2xl:text-16 rounded-[6px] border-primary text-primary">
        {label}
      </button>
    );
  } else if (color === "primary" && !border) {
    return (
      <button className="bg-primary px-4 py-[10px] text-12 2xl:text-16 font-semibold text-white rounded-[6px]">
        {label}
      </button>
    );
  } else if (color === "secondary") {
    return (
      <button className="px-4 py-[10px] text-12 2xl:text-16 font-semibold">
        {label}
      </button>
    );
  }

  return <button className={className}>{label}</button>;
};

export default Button;
