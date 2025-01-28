import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Places from "@/components/Places";
import Image from "next/image";

export default function index() {
  return (
    <>
        <Navbar />
        <Places />
        <Footer/>    
    </>
  );
}