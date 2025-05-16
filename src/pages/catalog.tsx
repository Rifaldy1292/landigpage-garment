import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";
import seragamSatpamPdl from "../assets/catalog/seragam-satpam-pdl.png";
import seragamSatpamPdh from "../assets/catalog/seragam-satpam-pdh.png";
import betBordir from "../assets/catalog/bet-bordir.png";
import borgol from "../assets/catalog/borgol.png";
import namaDada from "../assets/catalog/nama-dada.png";
import peluit from "../assets/catalog/peluit.png";
import pinSatpam from "../assets/catalog/pin-satpam.png";
import rompiMerah from "../assets/catalog/rompi-merah.png";
import rompiSatpam from "../assets/catalog/rompi-satpam.png";
import sabuk from "../assets/catalog/sabuk.png";
import sepatuPdhSatpam from "../assets/catalog/sepatu-pdh-satpam.png";
import sepatuPdlPolPp from "../assets/catalog/sepatu-pdl-pol-pp.png";
import sepatuSatpamPdl from "../assets/catalog/sepatu-satpam-pdl.png";
import talikur from "../assets/catalog/talikur.png";
import topiBed from "../assets/catalog/topi-bed.png";
import topiPetPolPp from "../assets/catalog/topi-pet-pol-pp.png";
import topiPolPp from "../assets/catalog/topi-pol-pp.png";
import topiSatpam from "../assets/catalog/topi-satpam.png";
//ini baru
import celanaTactical from "../assets/catalog2/celana-tactical.png";
import kaosCouple from "../assets/catalog2/kaos-couple.png";
import kaosJersey from "../assets/catalog2/kaos-jersey.png";
import kaosSatpamCream from "../assets/catalog2/kaos-satpam-cream.png";
import kaosStpamPendek from "../assets/catalog2/kaos-satpam-pendek.png";
import kaosSatpam from "../assets/catalog2/kaos-satpam.png";
import safariSecurity from "../assets/catalog2/safari-security.png";
import seragamPemadamKebakaran from "../assets/catalog2/seragam-pemadam-kebakaran.png";
import seragamPemdaHitamPutih from "../assets/catalog2/seragam-pemda-hitam-putih.png";
import seragamPemdaWanita from "../assets/catalog2/seragam-pemda-wanita.png";
import seragamPolisi from "../assets/catalog2/seragam-polisi.png";
import seragamSatpolPp from "../assets/catalog2/seragam-satpol-pp.png";
import seragamPemdaPria from "../assets/catalog2/sergam-pemda-pria.png";
import waerpack from "../assets/catalog2/wearpack.png";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { useEffect } from "react";
const dataKatalog = [
  {
    id: 1,
    nama: "Seragam Satpam PDL",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdl,
    detail: {
      hargaSet: "Rp.295.000,-",
      hargaAtasan: "Rp.175.000,-",
      hargaCelana: "Rp.150.000,-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "Sudah termasuk bet Stocklda, satpam, gada pratama dan PIN",
    },
  },
  {
    id: 2,
    nama: "Seragam Satpam PDH",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdh,
    detail: {
      hargaSet: "Rp.225.000,-",
      hargaAtasan: "Rp. 150.000,-",
      hargaCelana: "Rp. 120.000,-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "Sudah termasuk bet polda, satpam, gada pratama dan PIN",
    },
  },
  {
    id: 3,
    nama: "Seragam Wearpack",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: waerpack,
    detail: {
      hargaSet: "Rp. 120.000,- ",
      hargaAtasan: "Rp.110.000.-",
      hargaCelana: "Rp. 90.000,- ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 4,
    nama: "Seragam Pemda Pria ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPemdaPria,
    detail: {
      hargaSet: "Rp.275.000.- ",
      hargaAtasan: "-",
      hargaCelana: "  -",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "Harga sudah termasuk bet ",
    },
  },
  {
    id: 5,
    nama: "Seragam Pemda wanita ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPemdaWanita,
    detail: {
      hargaSet: "Rp.295.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 6,
    nama: "Seragam Pemda Hitam Putih ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPemdaHitamPutih,
    detail: {
      hargaSet: "Rp.235.000.-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 7,
    nama: "Seragam Satpol PP PDL",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpolPp,
    detail: {
      hargaSet: "Rp.560.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 8,
    nama: "Seragam Satpol PP PDH",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpolPp,
    detail: {
      hargaSet: "Rp. 400.000  ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 9,
    nama: "Seragam Pemadam Kebakaran ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPemadamKebakaran,
    detail: {
      hargaSet: "Rp.308.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 10,
    nama: "Seragam Polisi PDL",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPolisi,
    detail: {
      hargaSet: "Rp.675.000.- ",
      hargaAtasan: "-",
      hargaCelana: "Rp. 275.000 ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 11,
    nama: "Seragam Polisi PDH",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamPolisi,
    detail: {
      hargaSet: "Rp.580.000 .- ",
      hargaAtasan: "-",
      hargaCelana: "Rp. 275.000 ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 12,
    nama: "Seragam Polisi Set PD SUS",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdl,
    detail: {
      hargaSet: "Rp.580.000.- ",
      hargaAtasan: "-",
      hargaCelana: "Rp. 275.000 ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 13,
    nama: "Seragam Polisi SAFARI Set Pendek",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdl,
    detail: {
      hargaSet: "Rp. 400.000 .- ",
      hargaAtasan: "-",
      hargaCelana: "Rp. 275.000 ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },

  {
    id: 14,
    nama: "Seragam Safari Security ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: safariSecurity,
    detail: {
      hargaSet: "Rp.240.000.- ",
      hargaAtasan: "Rp. 120.000",
      hargaCelana: "Rp.150.000 ",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 15,
    nama: "Celana Tactical ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: celanaTactical,
    detail: {
      hargaSet: "Rp.325.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "Tactical 325 : Rp. 268.000",
    },
  },
  {
    id: 16,
    nama: "Kaos jersey ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: kaosJersey,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 17,
    nama: "Kaos Satpam Cream",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: kaosStpamPendek,
    detail: {
      hargaSet: "Rp.295.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 7,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 18,
    nama: "Kaos Satpam Cream",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: kaosSatpamCream,
    detail: {
      hargaSet: "Rp.295.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 7,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 19,
    nama: "Kaos Satpam ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: kaosSatpam,
    detail: {
      hargaSet: "Rp.295.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 7,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 20,
    nama: "Kaos Couple",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: kaosCouple,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 7,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 21,
    nama: "Sepatu PDL Pol PP",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: sepatuPdlPolPp,
    detail: {
      hargaSet: "Rp.187.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 22,
    nama: "Aksesoris Satpam",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdl,
    detail: {
      hargaSet: "Rp.11.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 23,
    nama: "Topi Pet POL PP",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: topiPetPolPp,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 24,
    nama: "Talikur",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: talikur,
    detail: {
      hargaSet: "Rp.11.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 25,
    nama: "Topi POL PP",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: topiPolPp,
    detail: {
      hargaSet: "Rp.30.000.,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 26,
    nama: "Rompi",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: rompiMerah,
    detail: {
      hargaSet: "Rp.187.000.-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 27,
    nama: "Rompi",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: rompiSatpam,
    detail: {
      hargaSet: "Rp.187.000.-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 28,
    nama: "Peluit",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: peluit,
    detail: {
      hargaSet: "Rp.5.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 29,
    nama: "Borgol",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: borgol,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 30,
    nama: "Topi Satpam",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: topiSatpam,
    detail: {
      hargaSet: "Rp.30.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 31,
    nama: "Bet Bordir",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: betBordir,
    detail: {
      hargaSet: "Rp.187.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 32,
    nama: "Nama Dada",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: namaDada,
    detail: {
      hargaSet: "Rp.30.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan:
        "PIN RESIN CUSTOM 7 CMX 2CM MAGNET : Rp, 25.000,- ,NON RESIN NORMAL : Rp.23.000,-,NON RESIN CUSTOM : Rp.24.000,- ",
    },
  },
  {
    id: 33,
    nama: "Topi PED",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: topiBed,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 34,
    nama: "SEPATU PDH LEATHER+PU NON TALI",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: sepatuPdhSatpam,
    detail: {
      hargaSet: "Rp.150.000,-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "SEPATU PDH LEATHER+PU TALI : Rp.140.000,-",
    },
  },
  {
    id: 35,
    nama: "Sabuk",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: sabuk,
    detail: {
      hargaSet: "Rp.60.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 36,
    nama: "PIN Satpam ",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: pinSatpam,
    detail: {
      hargaSet: "Rp.30.000.- ",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 37,
    nama: "Sepatu PDl",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: sepatuSatpamPdl,
    detail: {
      hargaSet: "-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
  {
    id: 38,
    nama: "Sabuk Kopel",
    deskripsi: "Seragam berkualitas untuk industri profesional.",
    gambar: seragamSatpamPdl,
    detail: {
      hargaSet: "Rp.135.000.-",
      hargaAtasan: "-",
      hargaCelana: "-",
      diskonMember: "5-10%",
      stock: 10,
      ketersediaan: "Ready Stock and By Order",
      catatan: "-",
    },
  },
];

const CatalogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, []);
  return (
    <>
      <Navbar />
      <section className="min-h-screen mt-10 px-4 sm:px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#1357D8]">
            Katalog Produk
          </h1>

          <div className="flex flex-col gap-10">
            {dataKatalog.map((item) => {
              const handleClick = () => {
                const nomorWa = "6289514636994"; // Ganti dengan nomor adminmu

                const pesan = `Halo Admin, saya ingin membeli produk berikut:
            Nama: ${item.nama}
            Harga Set: ${item?.detail?.hargaSet || "-"}
            Harga Atasan: ${item?.detail?.hargaAtasan || "-"}
            Harga Celana: ${item?.detail?.hargaCelana || "-"}
            Diskon Member: ${item?.detail?.diskonMember || "-"}
            Stock: ${item?.detail?.stock || "-"}
            Ketersediaan: ${item?.detail?.ketersediaan || "-"}
            Catatan: ${item?.detail?.catatan || "-"}`;

                const url = `https://wa.me/${nomorWa}?text=${encodeURIComponent(pesan)}`;
                window.open(url, "_blank");
              };
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    isPressable
                    className="shadow-lg hover:shadow-2xl p-5 w-full"
                  >
                    <CardBody className="p-0 flex flex-col md:flex-row gap-4">
                      {/* Gambar */}
                      <div className="w-full md:w-[40%]">
                        <Image
                          removeWrapper
                          alt={item.nama}
                          src={item.gambar}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </div>

                      {/* Detail */}
                      <div className="w-full md:w-[60%] flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-lg text-[#1357D8]">
                            {item.nama}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.deskripsi}
                          </p>

                          {/* Harga dan detail lainnya */}
                          <div className="w-full flex flex-col lg:flex-row gap-6 bg-white shadow-md rounded-md p-4 mt-4">
                            {/* Kolom 1 */}
                            <div className="flex-1 space-y-3">
                              <h2 className="text-xl font-bold text-gray-800">
                                HARGA {item?.detail?.hargaSet || "-"}
                              </h2>

                              <div>
                                <h3 className="font-semibold text-gray-700">
                                  Harga Atasan
                                </h3>
                                <p className="text-gray-800 font-medium border-b pb-2">
                                  {item?.detail?.hargaAtasan || "-"}
                                </p>
                              </div>

                              <div>
                                <h3 className="font-semibold text-gray-700">
                                  Harga Celana
                                </h3>
                                <p className="text-gray-800 font-medium border-b pb-2">
                                  {item?.detail?.hargaCelana || "-"}
                                </p>
                              </div>

                              <div>
                                <h3 className="font-semibold text-gray-700">
                                  Diskon Member
                                </h3>
                                <p className="text-sm border-b pb-2 text-gray-600">
                                  {item?.detail?.diskonMember || "-"}
                                </p>
                              </div>
                            </div>

                            {/* Kolom 2 */}
                            <div className="flex-1 space-y-3 ">
                              <div className="border-b pb-2">
                                <h3 className="font-semibold  text-gray-700">
                                  Stock In
                                </h3>
                                <p>{item?.detail?.stock || "-"}</p>
                              </div>

                              <div className="border-b pb-2">
                                <h3 className="font-semibold text-gray-700">
                                  Ketersediaan
                                </h3>
                                <p>{item?.detail?.ketersediaan || "-"}</p>
                              </div>

                              <div className="border-b pb-2">
                                <h3 className="font-semibold text-gray-700">
                                  Catatan
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {item?.detail?.catatan || "-"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tombol */}
                        <div className="mt-4 flex justify-end">
                          <div
                            onClick={handleClick}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md cursor-pointer text-center transition duration-200"
                            role="button"
                          >
                            Beli Sekarang
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CatalogPage;
