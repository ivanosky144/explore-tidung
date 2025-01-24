import Image from "next/image";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="p-20 bg-white">
        <div className="flex gap-10">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <h5>Explore</h5>
                    <h3>Tidung</h3>
                </div>
                <p>@2025</p>
            </div>
            <div className="flex flex-col">
                <h3>JELAJAHI PULAU TIDUNG</h3>
                <ul>
                    <li><a href="/places">Tempat Wisata</a></li>
                    <li><a href="/culinary">Kuliner Khas Tidung</a></li>
                    <li><a href="/article">Artikel Pilihan</a></li>
                    <li><a href="/history">Sejarah Pulau Tidung</a></li>
                    <li><a href="/safety">Tips Aman Berwisata</a></li>                
                </ul>
            </div>
            <div className="flex flex-col">
                <h4>Follow kami</h4>
                <div className="flex gap-4">
                    <a href="">
                        <FaSquareInstagram />
                    </a>
                    <a href="">
                        <FaFacebookSquare />
                    </a>
                    <a href="">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}