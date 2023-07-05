import Button from "@/components/Button";
import Image from "next/image";
import { PRODUCTS } from "@/lib/constants";
import React from "react";

type Props = {
  key: number | string;
  inDepthInfo?: boolean;
};

const DisplayDetailsCard = ({ key, inDepthInfo }: Props) => {
  return (
    <div
      className="flex flex-col rounded-[8px] border p-6 gap-[16px]"
      key={key}>
      {inDepthInfo && (
        <Image
          src="/home-interior.webp"
          alt="home"
          sizes="100vw"
          className="rounded-[4px]"
          style={{ width: "100%", height: "auto" }}
          width={0}
          height={0}
        />
      )}

      <div className="flex gap-2 items-center">
        <h1 className="font-semibold text-20 2xl:text-24">Omah Apik 3</h1>
        {inDepthInfo && (
          <span className="bg-[#F1F1F1] text-12 2xl:text-14 rounded-full py-1 px-3">
            Scandinavian
          </span>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <img src="/icons/studio-sae-icon.svg" alt="studio-sae-icon" />
        <p className="text-12 2xl:text-16">Studio SAe</p>
      </div>
      {!inDepthInfo && (
        <div className="grid grid-cols-[35%_1fr] text-14">
          <div className="flex flex-col text-14 2xl:text-16">
            <p>Jenis Rumah</p>
            <p>Tipe Desain</p>
          </div>
          <div className="flex flex-col text-14 2xl:text-16">
            <p>Scandinavian</p>
            <div className="flex gap-2 items-center text-primary">
              <img src="/icons/checklist.svg" alt="" /> Dapat Dimodifikasi
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between border-y py-4">
        {PRODUCTS.specification.map((item, i) => {
          return (
            <div className="flex flex-col gap-1 items-center">
              <img src={item.icon} alt="" className="w-6 h-6" />
              <p className="text-10 2xl:text-12 text-medium-grey text-center">
                {item.title}
              </p>
              <p className="text-12 2xl:text-16">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col">
        <h2 className="text-12 2xl:text-14">Harga Desain</h2>
        <h1 className="font-semibold text-24 2xl:text-32">Rp. 32.000.000</h1>
        <p className="text-medium-grey text-14 2xl:text-16">
          Harga konstruksi mulai dari Rp 560.000.000
        </p>
      </div>
      <Button border={inDepthInfo} color="primary">
        {inDepthInfo ? "Lihat Detail" : "Konsultasi Sekarang"}
      </Button>
    </div>
  );
};

export default DisplayDetailsCard;
