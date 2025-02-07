import { culinary, restaurants } from "@/data/culinary";

export default function Culinary() {


  return (
    <div className="md:p-36 flex flex-col gap-24 p-12">
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-extrabold">DESTINASI KULINER PULAU TIDUNG</h2>
          <p className="text-xl">Pulau Tidung tidak hanya menawarkan keindahan alam, tetapi juga berbagai destinasi kuliner yang menggugah selera. Wisatawan dapat menikmati hidangan laut segar yang diolah langsung oleh penduduk lokal, menjadikan setiap santapan pengalaman yang autentik dan berkesan.</p>
        </div>
        <div className="flex gap-12 flex-col mt-24">
          {culinary.map((item, index) => (
            <div className="flex md:gap-12 items-center md:flex-row flex-col gap-6 hover:bg-gray-50 rounded-xl cursor-pointer md:p-1 p-2" key={index}>
              <img src={item.photo} className="w-[500px] rounded-md"/>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="text-3xl font-extrabold" style={{ transform: 'scaleY(1.1)' }}>{item.name}</p>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-6xl font-extrabold flex justify-center">BOOKLET KULINER PULAU TIDUNG</h2>
      <div className="relative w-full flex justify-center items-center">
        <iframe 
          src="/assets/Boost Bisnis Lokal.pdf" 
          className="w-full md:max-w-3xl md:h-[700px] border rounded-lg shadow-lg h-[500px]"
        >
        </iframe>
      </div>
      <div className="w-full flex justify-center">
        <a 
          href="/assets/Boost Bisnis Lokal.pdf" 
          download="Boost_Bisnis_Lokal.pdf"
          className="md:w-[20%] w-[50%] flex justify-center items-center bg-dark_green text-lime_yellow font-bold py-3 px-6 rounded-lg shadow-md hover:opacity-80 text-center"
        >
          Download PDF
        </a>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <h2 className="text-6xl font-extrabold">TEMUKAN RESTORAN DI PULAU TIDUNG</h2>
          <p className="text-xl">Sedang mencari hidangan laut segar, kafe tepi pantai yang nyaman, atau mungkin camilan lokal yang lezat? Pulau Tidung memiliki semuanya!</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mt-3 grid-cols-2">
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