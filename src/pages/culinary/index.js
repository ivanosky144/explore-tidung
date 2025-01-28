import Culinary from "@/components/Culinary";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <Culinary />
        <Footer/>    
    </>
  );
}