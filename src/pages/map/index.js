import Footer from "@/components/Footer";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <Map />
        <div className="px-36 py-12">
          <h2 className="text-6xl font-extrabold">PETA BATAS ADMINISTRASI PULAU TIDUNG</h2>
          <img src="/assets/hasan_map.jpeg" alt="Tidung Map" className="rounded-md mt-2" />
        </div>
        <Footer/>    
    </>
  );
}