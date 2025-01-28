import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="relative w-[100%] h-[20%]"></div>
        <Footer />
    </>
  );
}