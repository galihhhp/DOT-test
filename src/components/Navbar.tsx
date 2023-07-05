import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-[32px] lg:px-[62px] py-[40px]">
      <img src="/icons/sobat-bangun.webp" alt="logo-sobat-bangun" />
      <div className="hidden md:flex gap-8 text-14 2xl:text-16 font-semibold">
        <Link href="#" className="text-black hover:text-primary flex gap-3">
          Tentang Kami
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
        <Link href="#" className="text-black hover:text-primary flex gap-3">
          Produk & Layanan
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
        <Link href="#" className="text-black hover:text-primary">
          Blog
        </Link>
        <Link href="#" className="text-black hover:text-primary">
          FAQ
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        <Button label="Daftar" color="secondary" />
        <Button label="Masuk" color="primary" />
      </div>
    </nav>
  );
};

export default Navbar;
