import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className="relative w-[100%] h-[20%]">
            <img src="/assets/sunset-tree.jpg"  className="w-full h-full object-cover" muted autoPlay onEnded={(e) => e.target.play()}/>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
              <p className="text-white font-extrabold text-7xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                SAUNG SUNSET
              </p>
              <p className="text-white font-semibold text-2xl w-[50%]">
              Dari sini lah kita akan menyaksikan keindahan sunset di Pulau Tidung. Saung Sunset Bahari juga menyediakan beberapa makan dan minuman yang dapat kita nikmati sambil menunggu matahari tenggelam. Karena berada di pinggir laut, tentu saja air kelapa muda menjadi hidangan favorit dilokasi ini.              </p>
            </div>
          </div>
        </div>        
        <Footer/>    
    </>
  );
}