import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function index() {
  return (
    <>
        <Navbar />
        <div className="flex flex-col gap-20">
          <div className="relative w-[100%] md:h-[20%] h-[40%]">
              <img src="/assets/pulau-payungHD3.jpeg" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 flex flex-col items-start justify-center md:px-20 px-9 py-10 md:gap-10 gap-3">
              <p className="text-white font-extrabold md:text-7xl md:w-[50%] text-3xl" style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                PULAU PAYUNG
              </p>
              <p className="text-white font-semibold md:text-2xl md:w-[50%] text-xs w-[80%]">
              Sebuah surga tersembunyi di Kepulauan Seribu! Nikmati keindahan pantai berpasir putih, snorkeling di terumbu karang yang memukau, dan suasana tenang yang cocok untuk melepas penat. Pengalaman baru dan petualangan seru menanti di setiap sudut pulau ini!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-12 md:p-20 p-9">
            <h2 className="md:text-5xl font-extrabold text-2xl">WAHANA YANG BISA DICOBA DI PULAU PAYUNG</h2>
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