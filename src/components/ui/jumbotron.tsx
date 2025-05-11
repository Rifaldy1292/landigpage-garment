import React from "react";
import bgDunia from "../../assets/bg-dunia.jpeg";
const Jumbotron = () => {
  return (
    <div
      className="relative w-full h-[750px]  md:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: `url('${bgDunia}')`, // Ganti dengan gambar kamu
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Mengapa Memilih Kami?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-10">
          Kualitas Produksi Premium
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-extrabold">
              Desain Custom Sesuai Kebutuhan
            </p>
            {/* <p className="uppercase text-sm tracking-wider text-gray-300">
              Desain Custom Sesuai Kebutuhan
            </p> */}
            <p className="text-sm text-gray-400">
              kami siap bantu wujudkan ide Anda secara profesional, sesuai
              identitas dan pesan yang ingin disampaikan
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-extrabold">
              Proses Cepat & Tepat Waktu
            </p>

            <p className="text-sm text-gray-400">
              Dengan sistem produksi terjadwal dan tim yang solid, kami mampu
              menyelesaikan pesanan dalam waktu singkat tanpa mengurangi
              kualitas.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-extrabold">
              Berpengalaman dalam Proyek Seragam Institusi
            </p>

            <p className="text-sm text-gray-400">
              {" "}
              kami terbiasa menangani kebutuhan apparel berskala besar untuk
              lembaga pelatihan, sekolah, hingga organisasi formal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
