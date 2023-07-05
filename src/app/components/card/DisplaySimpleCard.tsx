import Image from "next/image";
import React from "react";

type Props = {
  key: number;
};

const DisplaySimpleCard = ({ key }: Props) => {
  return (
    <div
      className="border p-4 rounded-[8px] gap-[24px] flex flex-col"
      key={key}>
      <Image
        src="/home-interior.webp"
        alt="home"
        sizes="100vw"
        className="rounded-[4px]"
        style={{ width: "100%", height: "auto" }}
        width={0}
        height={0}
      />
      <div className="flex flex-col gap-[8px]">
        <h1 className="font-bold text-16 2xl:text-20">Ruang</h1>
        <p className="text-12 2xl:text-14">2.0 x 2.9</p>
      </div>
    </div>
  );
};

export default DisplaySimpleCard;
