import { FOOTER } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy px-[32px] lg:px-[62px] py-[39px] text-white flex flex-col gap-10">
      <div className="grid grid-cols-2 md:grid-cols-[1fr_20%_20%] gap-4 md:gap-12">
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <img
            src="/icons/sobat-bangun-white.svg"
            alt="logo-sobat-bangun"
            className="w-44"
          />
          <p className="text-14 2xl:text-16">
            SobatBangun adalah platform digital dari SIG yang bergerak dengan
            misi mengembangkan proses pembangunan dan renovasi rumah secara
            lebih baik serta berkelanjutan.
          </p>
          <div className="flex gap-2 items-center">
            <img src="/icons/email.svg" alt="" />
            <Link className="text-14 2xl:text-16 underline" href="email">
              sobat@sobatbangun.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-14 2xl:text-16">Social Media:</h1>
            <div className="flex">
              <button>
                <img src="/icons/instagram.svg" alt="" />
              </button>
              <button>
                <img src="/icons/facebook.svg" alt="" />
              </button>
              <button>
                <img src="/icons/youtube.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-16 2xl:text-20 font-bold">
            {FOOTER.products.title}
          </h1>
          <div className="flex flex-col gap-2">
            {FOOTER.products.menu.map((item, i) => {
              return (
                <Link className="text-14 2xl:text-16" href={item}>
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-16 2xl:text-20 font-bold">
            {FOOTER.about.title}
          </h1>
          <div className="flex flex-col gap-2">
            {FOOTER.about.menu.map((item, i) => {
              return (
                <Link className="text-14 2xl:text-16" href={item}>
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {FOOTER.collaboration.map((item, i) => {
          return (
            <div className="flex flex-col">
              <h2 className="text-16 font-semibold">{item.title}</h2>
              <div className="flex gap-4">
                {item.logo.map((logo, i) => {
                  return <img src={logo} alt="" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between md:items-center">
        <div className="flex gap-2">
          <p className="text-16">Powered by:</p>
          <img src="/icons/sig.svg" alt="" />
        </div>
        <p className="text-14">
          Copyright © 2023 SobatBangun. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
