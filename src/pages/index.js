import Navbar from "@/components/Navbar";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Footer from "@/components/Footer";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="relative w-[100%] h-[20%]">
          <img src="/assets/tidung-shipHD.jpg" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
            <p className="text-white font-black text-8xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.1)' }}>
              KEINDAHAN PULAU TIDUNG
            </p>
            <p className="text-white font-semibold text-2xl w-[50%]">
              Pulau Tidung adalah surga ketenangan dan keindahan, menawarkan pengalaman menyegarkan bagi para pelancong yang ingin melepaskan penat dari rutinitas sehari-hari
            </p>
            <button className="flex justify-between p-4 bg-white rounded-md shadow-md items-center gap-2 hover:scale-105 transition-30s">
              <p className="font-bold">BACA LEBIH LANJUT</p>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="py-16 px-28">
          <h2 className="text-4xl font-extrabold" style={{ transform: 'scaleY(1.1)'}}>EXPLORE PULAU TIDUNG</h2>
          <div className="flex justify-between mb-2">
            <p className="text-lg my-2">Pilih tempat wisata favoritmu</p>
            <div className="justify-between flex gap-2 items-center">
              <p className="text-md relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
              LIHAT SEMUA
              </p>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex-2 flex flex-col gap-2">
                <div className="group relative overflow-hidden rounded-sm cursor-pointer h-96">
                  <img
                    src="/assets/jembatan-cintaHD.jpg"
                    className="rounded-sm h-[600px] w-[800px] transition-transform duration-300 group-hover:scale-110 shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-xl">JEMBATAN CINTA</h3>
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
                    src="/assets/pulau-payungHD3.jpeg"
                    className="rounded-sm h-[600px] w-[800px] transition-transform duration-300 group-hover:scale-110 shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-xl">PULAU PAYUNG</h3>
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
                    className="rounded-sm h-108 w-full transition-transform duration-300 group-hover:scale-110 shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-xl">PANAH ASMARA</h3>
                <div className="justify-between flex gap-2 items-center w-[12%]">
                  <p className="text-sm relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-black after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                    EXPLOR TEMPAT
                  </p>                    
                  <FaArrowRight />
                </div> 
            </div>
          </div>
          <div className="flex justify-between mt-32">
            <img src="/assets/makam-pulau-tidung.jpeg" className="rounded-sm shadow-md w-[650px] h-[500px]"/>
            <div className="flex flex-col gap-8 items-start pl-24 flex-end justify-center">
              <h2 className="font-extrabold text-6xl" style={{ transform: 'scaleY(1.1)'}}>MENYELAMI SEJARAH PULAU TIDUNG</h2>
              <p className="text-xl">Pulau Tidung tidak hanya tentang keindahan alam; pulau ini juga kaya akan sejarah. Pelajari lebih dalam tentang masa lalu Pulau Tidung, termasuk warisan budaya, situs bersejarah, dan bagaimana pulau ini menjadi destinasi wisata favorit di Indonesia.</p>
              <a href="/history" className="p-4 font-semibold border-4 rounded-md border-black bg-white hover:bg-black hover:text-white text-md">PELAJARI LEBIH LANJUT</a>
            </div>
          </div>
        </div>
        <div className="relative w-[100%] h-[15%]">
          <img src="/assets/article-photo1.jpeg" className="w-full h-full object-cover"/>
          <form className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
            <p className="text-white font-black text-5xl w-[80%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.1)' }}>
              SUARA ANDA UNTUK PULAU TIDUNG YANG LEBIH BAIK
            </p>
            <p className="text-white font-semibold text-2xl w-[80%]">
              Kami ingin mendengar pengalaman dan pendapat Anda tentang Pulau Tidung!
            </p>
            <div className="flex flex-col gap-4 w-[30%]">
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-md">Nama</p>
                <input placeholder="Nama anda" className="bg-white p-4 rounded-md font-semibold outline-none"/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-md">Email</p>
                <input placeholder="Email anda" className="bg-white p-4 rounded-md font-semibold outline-none"/>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold text-md">Masukan atau pertanyaan</p>
                <textarea placeholder="Masukan atau pertanyaan anda" rows={4} className="bg-white p-4 rounded-md font-semibold outline-none"></textarea>
              </div>
            </div>  
            <div className="flex gap-4 items-center">
              <input required type="checkbox" className="w-[20px] h-[20px] checked:bg-white checked:ring-2 checked:ring-black focus:ring-0"/>
              <label className="text-white text-lg">Saya setuju untuk menerima buletin dan informasi dari Discover Tidung.</label>
            </div>
            <button className="flex justify-between py-4 px-8 bg-white rounded-md shadow-md items-center gap-2 hover:scale-105 transition-30s">
              <p className="font-bold">KIRIM</p>
            </button>
          </form>
        </div>
        <Footer />
    </>
  );
}