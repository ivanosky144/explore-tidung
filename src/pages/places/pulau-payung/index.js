import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className="relative w-[100%] h-[20%]">
            <video src="/assets/pulau-payung-video.mp4"  className="w-full h-full object-cover" muted autoPlay onEnded={(e) => e.target.play()}/>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-20 py-10 gap-10">
              <p className="text-white font-extrabold text-7xl w-[50%]" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                PULAU PAYUNG
              </p>
              <p className="text-white font-semibold text-2xl w-[50%]">
              Sebuah surga tersembunyi di Kepulauan Seribu! Nikmati keindahan pantai berpasir putih, snorkeling di terumbu karang yang memukau, dan suasana tenang yang cocok untuk melepas penat. Pengalaman baru dan petualangan seru menanti di setiap sudut pulau ini!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 p-20">
            <h2 className="text-5xl font-extrabold">WAHANA YANG BISA DICOBA DI PULAU PAYUNG</h2>
            <div className="flex flex-col gap-5">
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Pulau Payung Kecil</h3>
                  <p className="text-lime_yellow">Serpihan surga diutara Pulau Payung. Tempat dimana pasir putih bertemu air sebiru langit. Temukan kolam tersembunyi yang cocok untuk melepas penat!</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Galangan Kapal Pulau Payung</h3>
                  <p className="text-lime_yellow">Penasaran bagaimana proses pembuatan kapal? Atau mungikin tertarik untuk membeli? Kunjungi Galangan Kapal Pulau Payung! Disini kita bisa melihat proses pembuatan kapal dari awal hingga akhir.  </p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Menara Suar</h3>
                  <p className="text-lime_yellow">Peninggalan kolonial yang menyimpan banyak kisah sejarah! Terang lampunya sudah membantu navigasi kapal selama puluhan tahun.</p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Pantai Barat Pulau Payung</h3>
                  <p className="text-lime_yellow">Ujung barat Pulau Payung. Pasir putihnya cocok sebagai alas mendirikan tenda. Saksikan sunset terbaik disini! </p>
                </div>
              </div>
              <div className="rounded-lg bg-dark_green p-8 shadow-md flex gap-15">
                <div className="flex flex-col gap-5">
                  <h3 className="font-extrabold text-2xl text-lime_yellow">Pantai Selatan Pulau Payung</h3>
                  <p className="text-lime_yellow">Menghadap langsung Laut Jawa, pantai ini memiliki deburan ombak yang lembut. Cocok digunakan untuk bermain air bersama keluarga.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>    
    </>
  );
}