import Button from "@/app/components/Button";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[62px] py-[40px]">
      <img src="/sobat-bangun.webp" alt="logo-sobat-bangun" />
      <div>asfas</div>
      <div className="flex gap-2">
        <Button label="Daftar" color="secondary" />
        <Button label="Masuk" color="primary" />
      </div>
    </nav>
  );
};

export default Navbar;
