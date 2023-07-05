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
          <h1 className="font-semibold text-24">Tampilan Rumah</h1>
          <div className="grid grid-cols-3 gap-[16px]">
            {[...Array(5)].map((_, i) => {
              return <DisplaySimpleCard key={i} />;
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>asfas</div>
          <Testimoni />
        </div>
      </div>
    </div>
  );
}
