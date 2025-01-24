import Navbar from "@/components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="py-16 px-28">
          <h2 className="text-2xl font-bold">EXPLORE PULAU TIDUNG</h2>
          <div className="flex justify-between mb-2">
            <p className="text-lg">Pilih tempat wisata favoritmu</p>
            <div className="justify-between flex gap-2 items-center">
              <p className="text-md">LIHAT SEMUA</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="flex-2 flex flex-col gap-2">
                <img src="/assets/jembatan-cinta.jpg" className="rounded-sm h-96 cursor-pointer"/>
                <h3 className="font-semibold text-xl">JEMBATAN CINTA</h3>
                <div className="justify-between flex gap-2 items-center w-[25%]">
                  <p className="text-sm">EXPLOR TEMPAT</p>
                  <FaArrowRight />
                </div>             
              </div>  
              <div className="flex-5 flex flex-col gap-2">
                <img src="/assets/pulau-payung.jpg"  className="rounded-sm h-96 cursor-pointer"/>
                <h3 className="font-semibold text-xl">PULAU PAYUNG</h3>
                <div className="justify-between flex gap-2 items-center w-[25%]">
                  <p className="text-sm">EXPLOR TEMPAT</p>
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
                <img src="/assets/tidung-lagoon-resort.jpg" className="rounded-sm h-108 cursor-pointer w-[100%]"/>
                <h3 className="font-semibold text-xl">TIDUNG LAGOON RESORT</h3>
                <div className="justify-between flex gap-2 items-center w-[12%]">
                  <p className="text-sm">EXPLOR TEMPAT</p>
                  <FaArrowRight />
                </div> 
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <img src="/assets/makam-raja-tidung.jpeg" className="rounded-sm"/>
            <div className="flex flex-col gap-8 items-center pl-24 flex-end">
              <h2 className="font-bold text-4xl">MENYELAMI SEJARAH PULAU TIDUNG</h2>
              <p className="text-md">Pulau Tidung tidak hanya tentang keindahan alam; pulau ini juga kaya akan sejarah. Pelajari lebih dalam tentang masa lalu Pulau Tidung, termasuk warisan budaya, situs bersejarah, dan bagaimana pulau ini menjadi destinasi wisata favorit di Indonesia.</p>
              <a href="/history" className="p-4 font-semibold border-4 rounded-md border-black bg-white hover:bg-black hover:text-white text-md">PELAJARI LEBIH LANJUT</a>
            </div>
          </div>
        </div>
    </>
  );
}