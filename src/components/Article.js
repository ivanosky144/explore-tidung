import { article } from "@/data/article";

export default function Article() {
  return (
    <div className="flex pt-6">
      <div className="w-[20%] px-6 flex flex-col items-center gap-5 bg-gray-50 rounded-lg p-3 shadow-md">
        <h3 className="font-bold text-center">TAMBAHKAN ARTIKELMU DI SINI</h3>
        <a href="" className="text-lime_yellow bg-dark_green rounded-xl p-3 font-semibold hover:opacity-90">Isi Form</a>
      </div>
      <div className="px-6 py-9 flex flex-col gap-10 items-center w-[60%]">
        <h2 className="text-3xl font-bold text-center">Menyibak Keindahan RW 02 Pulau Tidung: <br/>
  Your Gateway to Paradise in Kepulauan Seribu</h2>
        <div className="flex flex-col gap-3 py-8">
          <img src="/assets/article-photo1.jpeg" className="w-[900px] rounded-md shadow-md"/>
          <p className="text-justify">
            &ensp;&ensp;&ensp;<span className="italic">Looking for a serene getaway close to Jakarta? Pulau Tidung is the answer.</span> Pulau Tidung terletak di Kecamatan Kepulauan Seribu Selatan, Kabupaten Kepulauan Seribu, Daerah Khusus Ibukota (DKI) Jakarta. Pulau Tidung sebagai permata Kepulauan Seribu ini terbagi menjadi dua, yaitu Pulau Tidung Besar dan Pulau Tidung Kecil. Namun tidak perlu khawatir, kalian bisa menjangkau kedua pulau tersebut dalam waktu singkat melalui mahakarya ikonik yang disebut dengan “Jembatan Cinta”. Tidak hanya sebagai penghubung, Jembatan Cinta juga menawarkan pemandangan laut yang indah dan tak terlupakan. Pulau ini menjadi salah satu pulau dengan fokus utama di bidang pariwisata karena pesona alamnya yang luar biasa,
          </p>
          <p className="text-justify">
          &ensp;&ensp;&ensp;Dibalik popularitasnya, RW 02 merupakan salah satu area yang menjadi ‘jantung’ dari kegiatan wisata di Pulau Tidung. Lalu, apa sih yang sebenarnya pariwisata yang ditawarkan di lingkungan RW 02 Pulau Tidung? Jadi, wilayah ini menawarkan kombinasi antara keindahan alam yang asri dengan banyaknya spot maupun potensi wisata yang belum banyak dieksplorasi dan tidak ditemukan di tempat lain. <span className="italic">Wow, isn’t it fascinating?</span>Pantai Tidung, Jembatan Cinta, Island Hopping, Snorkeling, Diving, Sunset View, hingga wisata kuliner khas Pulau Tidung.
          </p>
          <p className="text-justify">
          &ensp;&ensp;&ensp;Tertarik untuk menjelajahi lebih jauh? Ayo, coba temukan pengalaman dan petualangan di setiap sudutnya. Jadi, tunggu apa lagi? Selanjutnya, kita akan mengungkap lebih dalam pesona Pulau Tidung, utamanya di lingkungan RW 02, Pulau Tidung.
          </p>
          <img src="/assets/article-photo2.jpeg" className="w-[900px] rounded-md shadow-md object-center"/>
          <p className="text-justify">
          &ensp;&ensp;&ensp;Kepulauan Seribu terdiri dari pulau kecil dengan banyaknya potensi yang dimilikinya dan perlu dikembangkan sebagai prioritas kepentingan untuk konservasi, pariwisata, dan pengembangan usaha perikanan dan kelautan (Apriyanti, 2014). Objek unik yang sudah dikenal adalah ikon Jembatan Cinta dengan panjang 800 meter yang menghubungkan Pulau Tidung Besar dan Pulau Tidung Kecil. Lokasi ini sering menjadi spot favorit untuk melihat keindahan matahari terbenam. Pulau Tidung Besar merupakan pulau yang berpenghuni dan padat akan aktivitas penduduk pada dasarnya. Adapun Pulau Tidung Kecil difokuskan sebagai kawasan budidaya dan pelestarian tanaman seperti bakau, mangrove, hingga terumbu karang. Selain itu, juga ada konservasi penyu dan Museum Tulang Ikan Paus yang membuat Pulau Tidung Kecil semakin hidup. 
          </p>
          <p className="text-justify">
          &ensp;&ensp;&ensp;Tidak kalah dengan wisata alamnya, kuliner di Pulau Tidung juga memberikan ciri khasnya sendiri dan tidak jauh dari olahan ikan yang menjadi kekayaan sumberdaya Pulau Tidung. Puk Cue merupakan salah satu bentuk kuliner Khas Pulau Tidung. Bentuk dan rasanya tidak jauh berbeda dengan pempek palembang. Namun, yang menjadikan Puk Cue unik adalah penyajiannya yang menggunakan sambal kacang. Selain itu juga ada keripik sukun, loh! Keripik sukun ini terbuat dari buah sukun yang memberikan rasa gurih dan enak. So, what are you waiting for? Yuk, cicipi kelezatan kuliner khas Pulau Tidung!
          </p>
          <p className="text-justify">
          &ensp;&ensp;&ensp;Selain menikmati kuliner khas, masih banyak aktivitas seru yang bisa dilakukan di Pulau Tidung, loh! Wisatawan bisa langsung mencoba aktivitas seru seperti snorkeling, terjun bebas dari Jembatan Cinta, menikmati keindahan sunrise dan sunset, bersepeda mengelilingi Pulau Tidung, hingga menikmati hidangan olahan laut di tepi bakar yang banyak ditawarkan di sekitar Jembatan Cinta.
          </p>
          <p className="text-justify italic">
          &ensp;&ensp;&ensp;Every corner of Pulau Tidung is a picture-perfect spot. Pack your bags and experience the unforgettable charm of Pulau Tidung!
          </p>
        </div>
      </div>
      <div className="mt-20 w-[20%] px-5">
        <h2 className="text-4xl font-extrabold px-2" style={{ transform: 'scaleY(1.1)'}}>Artikel lain</h2>
        <p className="text-lg px-2 mb-3">Pilih artikel favoritmu</p>
          <div className="flex flex-col gap-10">
            {article?.map((item, index) => (
              <div className="flex gap-8 rounded-xl md:flex-row flex-col hover:border items-center hover:border-gray-200 hover:border-2 hover:shadow-md cursor-pointer" key={index}>
                <div className="flex flex-col gap-2 justify-center px-2 py-3">
                  <h2 className="font-bold text-md">{item?.title}</h2>
                  <p className="text-lime_yellow font-semibold bg-dark_green rounded-xl p-1 text-center md:w-[60%] w-[35%] text-xs">{item?.theme}</p>
                  <p>
                  <p className="text-sm">
                    {item?.content?.split(" ").length > 50 
                      ? item.content.split(" ").slice(0, 20).join(" ") + "... " 
                      : item.content}
                    {item?.content?.split(" ").length > 20 && <a href="#" className="font-semibold">Baca selengkapnya</a>}
                  </p>
                  </p>
                </div>
              </div>
            ))}

          </div>
      </div>
    </div>
  );
}