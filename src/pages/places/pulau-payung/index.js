import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className="relative w-[100%] h-[20%]">
            <img src="/assets/pulau-payungHD3.jpeg"  className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
              <p className="text-white font-extrabold text-7xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                PULAU PAYUNG
              </p>
              <p className="text-white font-semibold text-2xl w-[50%]">
              Menikmati panorama eksotis di Pulau Payung, tempat terbaik untuk menyaksikan matahari terbenam dengan suasana yang tenang. Di Saung Sunset Bahari, tersedia berbagai hidangan dan minuman segar yang menemani momen santai Anda, termasuk kelapa muda yang menjadi favorit para pengunjung.
              </p>
            </div>
          </div>
        </div>          
        <Footer/>    
    </>
  );
}