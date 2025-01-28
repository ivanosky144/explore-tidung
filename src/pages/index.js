import Navbar from "@/components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="relative w-[100%] h-[20%]">
          <img src="/assets/tidung-shipHD.jpg" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
            <p className="text-white font-extrabold text-7xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
              KEINDAHAN PULAU TIDUNG
            </p>
            <p className="text-white font-semibold text-2xl w-[50%]">
              Pulau Tidung adalah surga ketenangan dan keindahan, menawarkan pengalaman menyegarkan bagi para pelancong yang ingin melepaskan penat dari rutinitas sehari-hari
            </p>
          </div>
        </div>
        <div className="py-16 px-28">
          <h2 className="text-4xl font-bold">EXPLORE PULAU TIDUNG</h2>
          <div className="flex justify-between mb-2">
            <p className="text-lg">Pilih tempat wisata favoritmu</p>
            <div className="justify-between flex gap-2 items-center">
              <p className="text-md relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              LIHAT SEMUA
              </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-10">
              <div className="flex-2 flex flex-col gap-2">
                <div className="group relative overflow-hidden rounded-sm cursor-pointer h-96">
                  <img
                    src="/assets/jembatan-cintaHD.jpg"
                    className="rounded-sm h-full w-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-xl">JEMBATAN CINTA</h3>
                <div className="justify-between flex gap-2 items-center w-[25%]">
                  <p className="text-sm relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                    EXPLOR TEMPAT
                  </p>                  
                  <FaArrowRight />
                </div>             
              </div>  
              <div className="flex-5 flex flex-col gap-2">
                <div className="group relative overflow-hidden rounded-sm cursor-pointer h-96">
                  <img
                    src="/assets/pulau-payung.jpg"
                    className="rounded-sm h-full w-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-xl">PULAU PAYUNG</h3>
                <div className="justify-between flex gap-2 items-center w-[25%]">
                  <p className="text-sm relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                    EXPLOR TEMPAT
                  </p>                  
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="group relative overflow-hidden rounded-sm cursor-pointer h-108">
                  <img
                    src="/assets/tidung-lagoon-resort.jpg"
                    className="rounded-sm h-108 w-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-xl">TIDUNG LAGOON RESORT</h3>
                <div className="justify-between flex gap-2 items-center w-[12%]">
                  <p className="text-sm relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                    EXPLOR TEMPAT
                  </p>                    
                  <FaArrowRight />
                </div> 
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <img src="/assets/makam-raja-tidung.jpeg" className="rounded-sm"/>
            <div className="flex flex-col gap-8 items-start pl-24 flex-end justify-center">
              <h2 className="font-bold text-4xl">MENYELAMI SEJARAH PULAU TIDUNG</h2>
              <p className="text-md">Pulau Tidung tidak hanya tentang keindahan alam; pulau ini juga kaya akan sejarah. Pelajari lebih dalam tentang masa lalu Pulau Tidung, termasuk warisan budaya, situs bersejarah, dan bagaimana pulau ini menjadi destinasi wisata favorit di Indonesia.</p>
              <a href="/history" className="p-4 font-semibold border-4 rounded-md border-black bg-white hover:bg-black hover:text-white text-md">PELAJARI LEBIH LANJUT</a>
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
}