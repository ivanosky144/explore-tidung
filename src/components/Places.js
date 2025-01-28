import Image from "next/image";

export default function Places() {
  return (
    <div className="p-36">
      <h2 className="text-6xl font-extrabold">TEMPAT WISATA DI PULAU TIDUNG</h2>
      <div className="flex gap-5 mt-20">
        <div className="relative w-96 h-[420px] overflow-hidden hover:opacity-90 cursor-pointer">
          <img
            src="/assets/jembatan-cintaHD2.jpg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '400px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-2xl"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.23' }}
            >
              JEMBATAN CINTA
            </p>
          </div>
        </div>
        <div className="relative w-96 h-[420px] overflow-hidden hover:opacity-90 cursor-pointer">
          <img
            src="/assets/jembatan-cintaHD2.jpg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '400px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-2xl"
              style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)', transform: 'scaleY(1.23' }}
            >
              SAUNG SUNSET
            </p>
          </div>
        </div>
        <div className="relative w-96 h-[420px] overflow-hidden hover:opacity-90 cursor-pointer">
          <img
            src="/assets/jembatan-cintaHD2.jpg"
            className="w-full h-auto object-cover rounded-md"
            style={{ objectPosition: 'center', height: '400px' }} 
          />
          <div className="absolute inset-0 flex items-end px-5 py-10 gap-5">
            <p
              className="text-white font-extrabold text-2xl"
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