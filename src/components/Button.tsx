import React from "react";

type Color = "primary" | "secondary" | "custom";

type Props = {
  children?: React.ReactNode;
  color: Color;
  border?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, color, border, className, onClick }: Props) => {
  if (color === "primary" && border) {
    return (
      <button
        onClick={onClick}
        className={`border px-4 py-[10px] font-semibold text-12 2xl:text-16 rounded-[6px] border-primary text-primary ${className}`}>
        {children}
      </button>
    );
  } else if (color === "primary" && !border) {
    return (
      <button
        onClick={onClick}
        className={`bg-primary px-4 py-[10px] text-12 2xl:text-16 font-semibold text-white rounded-[6px] ${className}`}>
        {children}
      </button>
    );
  } else if (color === "secondary") {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-[10px] text-12 2xl:text-16 font-semibold ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
