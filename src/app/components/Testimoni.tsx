import Image from "next/image";
import React from "react";

const Testimoni = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="font-semibold text-24">Testimoni</h1>
      <div className="flex flex-col gap-[16px]">
        {[...Array(3)].map((_, i) => {
          return (
            <div key={i} className="grid grid-cols-[44px_1fr] gap-[16px]">
              <Image
                src="/client-ava.webp"
                alt="client-testi-avatar"
                className="rounded-full"
                width={44}
                height={44}
              />
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <h2 className="text-16 font-semibold">Budi Setiadi</h2> |
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FBBF24"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <p className="text-14 text-[#4A5568]">4.5</p>
                </div>
                <p className="text-dark-grey">
                  Desainnya sangat bagus dan pengirimannya cepat. Terima kasih
                  Sobat Bangun
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimoni;
