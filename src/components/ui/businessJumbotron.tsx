import React from "react";
import { Link } from "react-router-dom"; // Ganti dengan path logo perusahaan kamu
// Jika pakai shadcn UI, sesuaikan jika tidak
import tentangKami from "../../assets/tentang-kami.jpg";
const BusinessJumbotron = () => {
  return (
    <div className="bg-white    md:px-12">
      <div className="max-w-7xl mx-auto grid py-5 px-5 grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Tentang kami
          </h2>
          <p className="text-gray-700 mb-4">
            Semeru Collection adalah usaha garment yang berlokasi di Sidoarjo,
            Jawa Timur. Kami bergerak di bidang produksi pakaian seragam, kaos,
            jaket, training pack, dan apparel lainnya, khususnya untuk kebutuhan
            lembaga pelatihan, instansi keamanan, komunitas, dan perusahaan.
          </p>
          <p className="text-gray-700 mb-6">
            Dengan pengalaman dan dedikasi tinggi dalam dunia konveksi, kami
            menghadirkan produk produk berkualitas tinggi dengan desain
            eksklusif, seperti yang telah kami produksi untuk program pelatihan
            GADA PRATAMA bekerja sama dengan PUSDIKLAT
          </p>

          <button className="bg-[#1357D8] hover:bg-[#ffffff] text-white font-medium px-6 py-2 rounded-lg border border-transparent hover:border-[#1357D8] transition duration-300 ease-in-out hover:text-[#1357D8]">
            <Link to="/tentang-kami"> Baca lengkap</Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full ">
          <img
            src={tentangKami} // Ganti path ini dengan gambar kamu
            alt="Business Illustration"
            className="w-full  rounded-xl shadow-lg h-[600px] object-cover object-top mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessJumbotron;
