import { motion } from "framer-motion";
import Carousel from "./ui/caresoul";
import { useState } from "react";
import Jumbotron from "./ui/jumbotron";
import BusinessJumbotron from "./ui/businessJumbotron";
import Footer from "./footer";
import logo1 from "../assets/logo-garuda-food.jpeg";
import logo2 from "../assets/logo-shelter.jpg";
import logo3 from "../assets/logo-polda-jatim.jpeg";
import logo4 from "../assets/logo-delta-surya.jpeg";
import logo5 from "../assets/logo-upn.jpeg";
import logo6 from "../assets/logo-rs-bhayangkara.jpeg";
import { Link } from "react-router-dom"; // Ganti dengan path logo perusahaan kamu

const SecondaryContent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const clients = [
    {
      name: "Client 1",
      logo: logo1,
    },
    {
      name: "Client 2",
      logo: logo2,
    },
    {
      name: "Client 3",
      logo: logo3,
    },
    {
      name: "Client 4",
      logo: logo4,
    },
    {
      name: "Client 5",
      logo: logo5,
    },
    {
      name: "Client 4",
      logo: "https://placehold.co/600x400",
    },
    {
      name: "Client 5",
      logo: "https://placehold.co/600x400",
    },
    {
      name: "Client 4",
      logo: "https://placehold.co/600x400",
    },
    {
      name: "Client 5",
      logo: "https://placehold.co/600x400",
    },
    {
      name: "Client 5",
      logo: "https://placehold.co/600x400",
    },
  ];

  const whatWeDo = [
    {
      id: 1,
      title: "Seragam Kerja Semmeru",
      describe:
        "Kami menyediakan berbagai jenis seragam yang dirancang khusus untuk memenuhi kebutuhan berbagai sektor, mulai dari seragam pabrik dan kantor yang mengutamakan kenyamanan dan profesionalisme, hingga seragam satpam dan medis yang menekankan pada fungsi dan keamanan. Kami juga memproduksi seragam sekolah, seragam instansi pemerintah (Pemda), hingga seragam untuk event organizer (EO), hotel, restoran, serta seragam olahraga dan komunitas atau organisasi. Semua produk kami dibuat dengan bahan berkualitas dan desain yang dapat disesuaikan dengan identitas masing-masing instansi atau perusahaan.",
    },
    {
      id: 2,
      title: "Penjualan Textile",
      describe:
        "Kami menyediakan berbagai jenis kain berkualitas untuk kebutuhan seragam, mulai dari Bellini dan Maxistyle yang elegan dan nyaman, hingga Devasa dan Texologi yang kuat serta cocok untuk kerja lapangan. Untuk seragam instansi dan kantor, tersedia Unione Drill dan Amerika Drill yang tebal dan tahan lama. Sementara Sakura dan SKS ringan dan ekonomis, ideal untuk sekolah atau kegiatan harian. Kain Pesona melengkapi pilihan dengan tampilan menarik dan warna yang tajam.",
    },
    {
      id: 3,
      title: "Divisi Aksesoris & Bordir",
      describe:
        "Kami menyediakan berbagai aksesoris pendukung seragam melalui Divisi Aksesoris, seperti sepatu, tas, sabuk, borgol, bed, dan emblem (baik timbul maupun tidak timbul) yang fungsional dan stylish. Selain itu, Divisi Bordir kami juga melayani layanan bordir untuk personalisasi seragam atau perlengkapan lainnya, dengan hasil yang rapi dan tahan lama. Kami juga menerima pembelian satuan untuk kebutuhan khusus atau personalisasi sesuai dengan permintaan pelanggan.",
    },
    {
      id: 4,
      title: "Divisi D325",
      describe:
        "Kami menyediakan T-Shirt berkualitas tinggi untuk berbagai kebutuhan, mulai dari EO (Event Organizer) yang memerlukan desain menarik untuk acara, hingga Komunitas yang membutuhkan T-Shirt dengan identitas spesifik. Untuk Pabrik & Instansi, kami menawarkan T-Shirt yang nyaman dan tahan lama untuk kegiatan sehari-hari, sementara untuk Promosi & Sekolah, kami menyediakan T-Shirt dengan desain yang dapat disesuaikan untuk acara promosi atau kebutuhan seragam sekolah yang nyaman dan menarik.",
    },
  ];

  return (
    <motion.div
      className="relative flex flex-col w-full  md:mt-10 mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="font-semibold text-[38px] mx-auto md:text-[48px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Apa yang kita lakukan?
      </motion.h1>

      <motion.p
        className="text-gray-500 mx-auto text-[21px] text-center max-w-7xl mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Kami menyediakan beragam produk pakaian berkualitas tinggi untuk
        berbagai kebutuhan. Mulai dari pakaian kasual hingga busana formal, kami
        hadir untuk memenuhi gaya hidup pelanggan di seluruh Indonesia.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 max-w-7xl mx-auto">
        {whatWeDo.map((i) => (
          <motion.div
            key={i.id}
            className="bg-white mt-5 rounded-xl p-6 flex flex-col justify-between shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3 },
            }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {i.title}
              </h2>
              <p className="text-gray-600 mb-4 truncate-3-lines">
                {i.describe}
              </p>
            </div>
            <button className="self-start bg-[#1357D8] text-white px-4 py-2 rounded-lg hover:bg-[#104ebc] transition">
              <Link to="/pelayanan">Baca lengkap</Link>
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center w-full mx-auto py-16 overflow-hidden max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className="font-semibold text-[38px] mx-auto md:text-[48px]">
          Kerja Sama Langsung Maupun Tidak
        </h1>

        <div className="relative overflow-hidden mt-10">
          <motion.div
            className="flex space-x-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                className="transition-transform transform hover:scale-105 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-32 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Jumbotron />
      </motion.div>

      <motion.div
        className="relative w-full py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <BusinessJumbotron />
      </motion.div>

      <motion.div
        className="relative w-full py-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      ></motion.div>
      <Footer />
    </motion.div>
  );
};

export default SecondaryContent;
