import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-32 bg-white shadow-lg bg-[#3D5D6C] text-lime_yellow">
        <div className="flex gap-10 w-full justify-between">
            <div className="flex gap-24">
                <div className="flex flex-col">
                    <div className="flex flex-col font-bold">
                        <h5>Eksplor</h5>
                        <h3 className="text-3xl">Tidung</h3>
                    </div>
                    <p className="font-semibold">2024 © KKN PPM UGM - Mendayung Seribu</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold">JELAJAHI PULAU TIDUNG</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="text-sm font-semibold"><a href="/places">Tempat Wisata</a></li>
                        <li className="text-sm font-semibold"><a href="/culinary">Kuliner Khas Tidung</a></li>
                        <li className="text-sm font-semibold"><a href="/article">Artikel Pilihan</a></li>
                        <li className="text-sm font-semibold"><a href="/history">Sejarah Pulau Tidung</a></li>
                        <li className="text-sm font-semibold"><a href="/safety">Tips Aman Berwisata</a></li>                
                    </ul>
                </div>
            </div>
            <div className="flex flex-col">
                <h4 className="font-semibold">Follow kami</h4>
                <div className="flex gap-4">
                    <a href="">
                        <FaSquareInstagram className="text-lg"/>
                    </a>
                    <a href="">
                        <FaFacebookSquare className="text-lg"/>
                    </a>
                    <a href="">
                        <FaYoutube className="text-lg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}