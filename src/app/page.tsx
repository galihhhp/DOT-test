import DisplayDetailsCard from "@/app/components/card/DisplayDetailsCard";
import DisplaySimpleCard from "@/app/components/card/DisplaySimpleCard";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Testimoni from "@/app/components/Testimoni";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex px-[62px] gap-[36px]">
        <div className="w-[70%] flex flex-col gap-[16px]">
          <h1 className="font-semibold text-20 2xl:text-24">Tampilan Rumah</h1>
          <div className="grid grid-cols-3 gap-[16px]">
            {[...Array(5)].map((_, i) => {
              return <DisplaySimpleCard key={i} />;
            })}
          </div>
        </div>
        <div className="w-[30%] flex flex-col gap-[32px]">
          <DisplayDetailsCard key="consultation" />
          <Testimoni />
        </div>
      </div>
      <div className="px-[62px] mt-32 2xl:mt-40 mb-10 gap-6 flex flex-col">
        <h1 className="text-20 2xl:text-24 font-semibold">
          Desain Lainnya oleh Studio SAe
        </h1>
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => {
            return <DisplayDetailsCard key={i} inDepthInfo />;
          })}
        </div>
      </div>
    </div>
  );
}
