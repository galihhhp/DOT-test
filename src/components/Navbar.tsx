"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState<boolean>(true);

  const openModalHandler = () => setIsOpened(!isOpened);

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
        <Button color="secondary">Daftar</Button>
        <Button color="primary">Masuk</Button>
      </div>
      <Button color="secondary" onClick={openModalHandler}>
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      {isOpened && (
        <div className="flex flex-col p-10 fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="w-full mb-10 flex justify-between">
            <img src="/icons/sobat-bangun.webp" alt="logo-sobat-bangun" />
            <Button color="secondary" onClick={openModalHandler}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          <div className="flex flex-col items-start gap-8 w-full text-14 2xl:text-16 font-semibold">
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
          <Button color="secondary" className="w-full">
            Daftar
          </Button>
          <Button className="w-full" color="primary">
            Masuk
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
