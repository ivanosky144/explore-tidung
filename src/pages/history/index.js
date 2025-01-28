import Footer from "@/components/Footer";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <History />
        <Footer/>    
    </>
  );
}