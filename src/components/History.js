import { histories } from "@/data/history";

export default function History() {
  return (
    <div className="md:p-36 flex flex-col gap-4 p-12">
      <div>
        <h2 className="md:text-6xl font-extrabold text-3xl">SEJARAH & BUDAYA PULAU TIDUNG</h2>
        <p className="md:text-2xl mt-3">Pulau Tidung tidak hanya menawarkan keindahan alam, tetapi juga sejarah dan budaya yang kaya. Dari cerita masa kolonial hingga tradisi lokal yang masih dijaga hingga kini, Pulau Tidung menyimpan banyak kisah menarik. Warga pulau ini menjalankan tradisi dengan penuh semangat, seperti seni kerajinan, musik tradisional, dan kearifan lokal yang menjadi bagian penting dari kehidupan sehari-hari mereka.</p>
      </div>
        <div className="flex gap-12 flex-col md:mt-24 mt-12">
          {histories.map((item, index) => (
            <div className="flex gap-12 items-center hover:bg-gray-50 rounded-md cursor-pointer md:flex-row flex-col gap-6 md:p-1 p-2" key={index}>
              <img src={item.image} className="w-[500px] rounded-md shadow-md"/>
              <div className="flex flex-col justify-start w-full gap-2">
                <p className="nd:text-3xl text-xl font-extrabold md:ml-0 ml-3" style={{ transform: 'scaleY(1.1)' }}>{item.title}</p>
                <p style={{ transform: 'scaleX(1.05)' }} className="ml-6 w-[90%] md:text-lg text-md">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}