import Image from "next/image";
import { useRouter } from "next/router";

export default function Places() {

  const router = useRouter();

  return (
    <div className="md:p-36 p-12">
      <h2 className="text-6xl font-extrabold">TEMPAT WISATA DI PULAU TIDUNG</h2>
      <div className="flex gap-10 mt-20 md:flex-row flex-col">
        <div className="relative  md:w-[500px] md:h-[620px] h-[480px] overflow-hidden hover:opacity-90 cursor-pointer" onClick={() => router.push("/places/jembatan-cinta")}>
          <img
            src="/assets/jembatan-cintaHD2.jpg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '600px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-4xl"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.23' }}
            >
              JEMBATAN CINTA
            </p>
          </div>
        </div>
        <div className="relative md:w-[500px] md:h-[620px] h-[480px] overflow-hidden hover:opacity-90 cursor-pointer" onClick={() => router.push("/places/saung-sunset")}>
          <img
            src="/assets/sunset-tree.jpg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '600px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-4xl"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.23' }}
            >
              PANAH ASMARA
            </p>
          </div>
        </div>
        <div className="relative md:w-[500px] md:h-[620px] h-[480px] overflow-hidden hover:opacity-90 cursor-pointer" onClick={() => router.push("/places/pulau-payung")}>
          <img
            src="/assets/pulau-payungHD3.jpeg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '600px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-4xl"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.23' }}
            >
              PULAU PAYUNG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}