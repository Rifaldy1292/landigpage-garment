import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import founder from "../assets/founder.jpg";
import coFounder from "../assets/co-founder.jpg";
import coFounder2 from "../assets/co-founder2.jpg";
import galeriFoto from "../assets/galeri-foto.jpg";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative  py-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Tentang Kami
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 mt-10">
            <p className="mt-4 text-lg text-gray-600">
              Semeru Collection adalah usaha garment yang berlokasi di Sidoarjo,
              Jawa Timur. Kami bergerak di bidang produksi pakaian seragam,
              kaos, jaket, training pack, dan apparel lainnya, khususnya untuk
              kebutuhan lembaga pelatihan, instansi keamanan, komunitas, dan
              perusahaan. Dengan pengalaman dan dedikasi tinggi dalam dunia
              konveksi, kami menghadirkan produk produk berkualitas tinggi
              dengan desain eksklusif, seperti yang telah kami produksi untuk
              program pelatihan GADA PRATAMA bekerja sama dengan PUSDIKLAT
            </p>
            <div className="w-[300px] h-[300px] mt-10 mx-auto overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 ease-in-out">
              <img
                src={galeriFoto}
                alt="Image"
                className="w-full h-full object-cover object-top rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Nama Galeri
                </h3>
                <p className="text-gray-600 mt-2">
                  Deskripsi singkat galeri ini.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visions and Missions Section */}
        <div className="max-w-7xl mx-auto mt-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">Visi Kami</h2>
            <p className="mt-4 text-lg text-gray-600">
              Menjadi produsen garment terpercaya di Indonesia yang
              mengedepankan kualitas, kecepatan, dan kepuasan pelanggan
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">Misi Kami</h2>
            <p className="mt-4 text-lg text-gray-600">
              Menyediakan layanan produksi seragam dan apparel berkualitas
              tinggi dengan desain presisi. Mengutamakan kepuasan klien melalui
              fleksibilitas dan kecepatan produksi. Memberdayakan masyarakat
              lokal dengan menciptakan lapangan kerja di bidang konveksi dan
              produksi kreatif
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Tim Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Menjadi produsen garment terpercaya di Indonesia yang mengedepankan
            kualitas, kecepatan, dan kepuasan pelanggan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Founder */}
            <div className="flex items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6">
              <img
                src={founder}
                alt="Founder"
                className="w-48 h-48 rounded-3xl object-cover border-4 border-blue-500 mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Dirut Utama
                </h3>
                <p className="text-lg text-gray-600 mt-2">A.HADI.SH</p>
              </div>
            </div>

            {/* Co-Founder */}
            <div className="flex items-center  bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6">
              <img
                src={coFounder}
                alt="Co-Founder"
                className="w-48 h-48 rounded-3xl  object-cover object-top border-4 border-green-500 mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Dirut Operasional
                </h3>
                <p className="text-lg text-gray-600 mt-2">DWI SIGIT SPi</p>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-6">
              <img
                src={coFounder2}
                alt="Co-Founder"
                className="w-48 h-48 rounded-3xl object-cover border-4 border-green-500 mr-6"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Dirut Sarana Prasana
                </h3>
                <p className="text-lg text-gray-600 mt-2">BUALI SE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
