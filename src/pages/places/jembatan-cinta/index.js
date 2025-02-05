import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className="relative w-[100%] h-[20%]">
            <video src="/assets/jembatan-cinta-video.mp4"  className="w-full h-full object-cover" muted autoPlay onEnded={(e) => e.target.play()}/>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
              <p className="text-white font-extrabold text-7xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                JEMBATAN SUNSET & PULAU TIDUNG KECIL
              </p>
              <p className="text-white font-semibold text-2xl w-[50%]">
              Nikmati keindahan Jembatan Cinta dan pesona Pulau Tidung yang memukau. Tempat ini menawarkan perpaduan sempurna antara pemandangan alam yang memikat dan ketenangan yang menyegarkan jiwa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 p-20">
            <h2 className="text-5xl font-extrabold">WAHANA YANG BISA DICOBA DI JEMBATAN CINTA</h2>
            <div className="flex flex-col gap-5">
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Water Sofa</h3>
                  <p className="text-lime_yellow">Sesuai dengan namanya, perahu yang ditarik dengan speed boat ini berbentuk seperti sofa. Perahu karet berbentuk seperti sofa yang dapat di duduki 2 hingga 4 peserta ini akan ditarik dengan kencang oleh speed boat mengitari perairan disekitar Jembatan Cinta. Manufer yang dilakukan oleh speed boat bisa menambah keseruan aktivitas ini.</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Donuts Boat</h3>
                  <p className="text-lime_yellow">erahu berbentuk bulat seperti kue donat ini bisa diikuti 1 hingga 3 orang. Agar dapat bertahan lama tanpa terjatuh dari donut boat, anda harus berpegangan kencang di kedua pegangan untuk menahan tubuh. Semakin lama anda bertahan akan semakin seru.</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Canoe</h3>
                  <p className="text-lime_yellow">Adalah sampan kecil yang bisa diisi oleh 2 orang penumpang, keduanya akan diberi pengayuh dengan 2 bilah mata kayuh. Kita bisa menggunakan Canoe atau Kano untuk berputar mengitari area sekitar Jembatan Cinta dengan santai..</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Banana Boat</h3>
                  <p className="text-lime_yellow">Bentuk dan warnanya yang kuning seperti pisang membuatnya di panggil dengan banana boat. Ditumpangi oleh 5 penumpang dan ditarik dengan kecepatan tinggi membuat sang banana boat kadang melompat ketika bertemu dengan gelombang kecil. Terbalik ketika melakukan manufer adalah yang paling menyenangkan ketika mengikuti aktivitas ini.</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Banana Boat</h3>
                  <p className="text-lime_yellow">Bentuk dan warnanya yang kuning seperti pisang membuatnya di panggil dengan banana boat. Ditumpangi oleh 5 penumpang dan ditarik dengan kecepatan tinggi membuat sang banana boat kadang melompat ketika bertemu dengan gelombang kecil. Terbalik ketika melakukan manufer adalah yang paling menyenangkan ketika mengikuti aktivitas ini.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>    
    </>
  );
}