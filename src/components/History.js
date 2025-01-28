import { histories } from "@/data/history";
import Image from "next/image";

export default function History() {
  return (
    <div className="p-36 flex flex-col gap-4">
      <div>
        <h2 className="text-6xl font-extrabold">SEJARAH & BUDAYA PULAU TIDUNG</h2>
        <p className="text-xl">Pulau Tidung tidak hanya menawarkan keindahan alam, tetapi juga sejarah dan budaya yang kaya. Dari cerita masa kolonial hingga tradisi lokal yang masih dijaga hingga kini, Pulau Tidung menyimpan banyak kisah menarik. Warga pulau ini menjalankan tradisi dengan penuh semangat, seperti seni kerajinan, musik tradisional, dan kearifan lokal yang menjadi bagian penting dari kehidupan sehari-hari mereka.</p>
      </div>
        <div className="flex gap-12 flex-col mt-24">
          {histories.map((item, index) => (
            <div className="flex gap-12 items-center" key={index}>
              <img src={item.image} className="w-[500px] rounded-md"/>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="text-3xl font-extrabold" style={{ transform: 'scaleY(1.1)' }}>{item.title}</p>
                <p style={{ transform: 'scaleX(1.05)' }} className="ml-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}