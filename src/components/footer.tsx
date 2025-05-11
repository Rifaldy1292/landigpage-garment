import logoPerusahaan from "../assets/logo-perusahaan.jpg";
import { Link } from "react-router-dom"; // Ganti dengan path logo perusahaan kamu
const Footer = () => {
  return (
    <footer className="bg-[#1357D8] text-gray-300 py-12 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img
            src={logoPerusahaan} // Ganti dengan path logo kamu
            alt="Logo"
            className="w-32 mb-4 w-[50px]"
          />
          <p className="text-sm">
            Menjadi produsen garment terpercaya di Indonesia yang mengedepankan
            kualitas, kecepatan, dan kepuasan pelanggan.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigasi </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/pelayanan"> Tentang Kami</Link>
            </li>
            <li>
              <Link to="/pelayanan">Pelayanan</Link>
            </li>

            <li>
              <Link to="/hubungi-kami">Hubungi kami</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="font-semibold text-white mb-4">Layanan Kami</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Seragam Kerja Semeru
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Penjualan Textile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Divisi D325
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Divisi Aksesoris & bordir
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-white mb-4">Hubungi kami</h4>
          <p className="text-sm mb-2">
            Ruko Suncity Biz No E-29,
            <br />
            Arteri, Kec. Porong,
            <br />
            Kab. Sidoarjo
          </p>
          <p className="text-sm mb-1">Telpon: 0819-3740-0727</p>
          <p className="text-sm">
            Email:{" "}
            <a
              href="mailto:info@symbioticinfo.com"
              className=" hover:underline"
            >
              semmeruofficial@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
