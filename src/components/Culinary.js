import { culinary, restaurants } from "@/data/culinary";
import Image from "next/image";
import { useState } from "react";

export default function Culinary() {

  const [option, setOption] = useState();


  return (
    <div className="p-36 flex flex-col gap-24">
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-extrabold">DESTINASI KULINER PULAU TIDUNG</h2>
          <p className="text-xl">Pulau Tidung tidak hanya menawarkan keindahan alam, tetapi juga berbagai destinasi kuliner yang menggugah selera. Wisatawan dapat menikmati hidangan laut segar yang diolah langsung oleh penduduk lokal, menjadikan setiap santapan pengalaman yang autentik dan berkesan.</p>
        </div>
        <div className="flex gap-12 flex-col mt-24">
          {culinary.map((item, index) => (
            <div className="flex gap-12 items-center" key={index}>
              <img src={item.photo} className="w-[500px] rounded-md"/>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="text-3xl font-extrabold" style={{ transform: 'scaleY(1.1)' }}>{item.name}</p>
                <p style={{ transform: 'scaleX(1.05)' }} className="ml-5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-extrabold">TEMUKAN RESTORAN DI PULAU TIDUNG</h2>
          <p className="text-xl">Sedang mencari hidangan laut segar, kafe tepi pantai yang nyaman, atau mungkin camilan lokal yang lezat? Pulau Tidung memiliki semuanya!</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
            {restaurants?.map((item, index) => (
              <div className="border-2 border-gray-100 rounded-md hover:border-black shadow-sm">
                <img src={item.photo} className="w-full h-[200px]"/>
                <div className="p-3">
                  <p className="font-bold" style={{ transform: 'scaleY(1.1)'}}>{item.name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}