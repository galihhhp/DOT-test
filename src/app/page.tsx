import DisplayDetailsCard from "@/components/card/DisplayDetailsCard";
import DisplaySimpleCard from "@/components/card/DisplaySimpleCard";
import Footer from "../components/Footer";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex md:flex-row flex-col px-[32px] lg:px-[62px] gap-[36px]">
        <div className="w-full md:w-[60%] xl:w-[70%] flex flex-col gap-[16px]">
          <h1 className="font-semibold text-20 2xl:text-24">Tampilan Rumah</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {[...Array(5)].map((_, i) => {
              return <DisplaySimpleCard key={i} />;
            })}
          </div>
        </div>
        <div className="w-full md:w-[40%] xl:w-[30%] flex flex-col gap-[32px]">
          <DisplayDetailsCard key="consultation" />
          <Testimoni />
        </div>
      </div>
      <div className="px-[32px] lg:px-[62px] mt-20 md:mt-32 2xl:mt-40 mb-10 gap-6 flex flex-col">
        <h1 className="text-20 2xl:text-24 font-semibold">
          Desain Lainnya oleh Studio SAe
        </h1>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => {
            return <DisplayDetailsCard key={i} inDepthInfo />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
