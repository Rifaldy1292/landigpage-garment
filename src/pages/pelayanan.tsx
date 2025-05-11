import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import seragamKerja from "../assets/seragam-kerja.png";
import textile from "../assets/textile.png";
import divisiD325 from "../assets/divisi-d325.jpg";
import aksesorisBordir from "../assets/aksesorisBordir.png";
import { useEffect } from "react";
export default function Pelayanan() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, []);
  return (
    <>
      <Navbar />

      <div className="w-full mx-auto px-6 py-20  bg-gray-100">
        <div className="text-center mt-10 ">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">
            Pelayanan Kami
          </h1>
          <p className="text-lg text-gray-600">
            Penjualan Kain Seragam Kualitas Premium Dan Personal Dengan Beberapa
            Produk Mulai Untuk Seragam Dan Gorden Unggulan
          </p>
        </div>
        <div className="flex mt-8 flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto ">
          <div className="flex-shrink-0">
            <img
              alt="Mobile phone screenshot showing a yellow header with a man in a blue shirt holding a tool, text 'Learn Skill Development Anywhere.. Anytime..!' and a mobile number input field with Indian flag"
              className="w-[300px] h-auto rounded-xl shadow-md"
              src={seragamKerja}
              width={300}
              height={600}
            />
          </div>
          <div className="max-w-xl ml-10">
            <div className="flex items-center gap-2 text-orange-600 mb-3 text-lg">
              {/* Bisa ganti icon di sini */}

              <h2 className="font-extrabold text-black text-lg leading-tight">
                Seragam Kerja Semmeru
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kami menyediakan berbagai jenis seragam untuk memenuhi kebutuhan
              di berbagai sektor. Mulai dari seragam pabrik yang nyaman dan
              tahan lama, seragam kantor yang profesional, hingga seragam satpam
              yang fungsional dan aman. Kami juga menawarkan seragam sekolah
              dengan desain yang rapi dan praktis, serta seragam Pemda yang
              sesuai dengan peraturan pemerintah. Untuk acara dan event, seragam
              EO kami hadir dengan desain menarik dan mudah dikenali.
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kami juga menyediakan seragam medis yang nyaman dan higienis,
              seragam hotel dan restoran dengan desain elegan untuk
              profesionalisme, serta seragam olahraga yang mendukung aktivitas
              fisik dengan kenyamanan tinggi. Tak ketinggalan, seragam
              komunitas/organisasi yang mempererat identitas dan kebersamaan.
              Semua produk kami didesain untuk memberikan kenyamanan, kualitas,
              dan kesan profesional sesuai kebutuhan Anda.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-6 py-20  ">
        <div className="flex mt-8 flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto ">
          <div className="max-w-xl ml-10">
            <div className="flex items-center gap-2 text-orange-600 mb-3 text-lg">
              <h2 className="font-extrabold text-black text-lg leading-tight">
                Penjualan Textile
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kami menyediakan berbagai pilihan kain berkualitas tinggi yang
              cocok untuk berbagai jenis seragam dan kebutuhan fashion industri.
              Kain Bellini dikenal dengan teksturnya yang halus dan tampilan
              elegan, sementara Kain Maxistyle menawarkan keawetan dan
              kenyamanan maksimal.
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kain Devasa memberikan kesan mewah dengan daya tahan tinggi, dan
              Kain Texologi unggul dalam teknologi kain modern yang ringan dan
              bernapas. Untuk kebutuhan seragam yang kuat dan tahan lama, Kain
              Unione Drill dan Kain Amerika Drill sangat cocok karena
              ketebalannya yang ideal. Kain Sakura dan Kain SKS hadir dengan
              pilihan warna yang kaya dan tekstur lembut, sangat cocok untuk
              tampilan formal maupun kasual. Sementara itu, Kain Pesona
              memberikan perpaduan keindahan dan kenyamanan, ideal untuk desain
              yang ingin tampil menonjol namun tetap praktis. Semua kain ini
              kami sediakan untuk menjamin kualitas terbaik dalam setiap produk
              yang Anda buat.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              alt="Mobile phone screenshot showing a yellow header with a man in a blue shirt holding a tool, text 'Learn Skill Development Anywhere.. Anytime..!' and a mobile number input field with Indian flag"
              className="w-[300px] h-auto rounded-xl shadow-md"
              src={textile}
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-6 py-20  bg-gray-100">
        <div className="flex mt-8 flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto ">
          <div className="flex-shrink-0">
            <img
              alt=""
              className="w-[300px] h-auto rounded-xl shadow-md"
              src={aksesorisBordir}
              width={300}
              height={600}
            />
          </div>
          <div className="max-w-xl ml-10">
            <div className="flex items-center gap-2 text-orange-600 mb-3 text-lg">
              <h2 className="font-extrabold text-black text-lg leading-tight">
                Divisi Aksesoris & Bordir
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kami memiliki dua divisi utama yang siap memenuhi kebutuhan
              perlengkapan seragam Anda. Divisi Aksesoris menyediakan berbagai
              item pelengkap seperti sepatu, tas, sabuk, borgol, bed, dan emblem
              (baik timbul maupun tidak timbul) yang dirancang khusus untuk
              mendukung tampilan dan fungsi seragam secara maksimal.
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Sementara itu, Divisi Bordir melayani jasa bordir profesional dan
              presisi, termasuk pembelian satuan, sehingga cocok untuk kebutuhan
              personal maupun instansi. Setiap produk dibuat dengan kualitas
              terbaik untuk menunjang kenyamanan, identitas, dan profesionalisme
              pemakainya.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto px-6 py-20  ">
        <div className="flex mt-8 flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto ">
          <div className="max-w-xl ml-10">
            <div className="flex items-center gap-2 text-orange-600 mb-3 text-lg">
              <h2 className="font-extrabold text-black text-lg leading-tight">
                Divisi D325
              </h2>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Kami melayani pembuatan T-Shirt untuk berbagai kebutuhan dengan
              desain yang dapat disesuaikan sesuai identitas dan tujuan
              pemakaian. Untuk Event Organizer (EO), kami menyediakan kaos yang
              nyaman dengan desain eksklusif agar tim tampil kompak dan
              profesional.
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Untuk komunitas, T-Shirt kami membantu memperkuat rasa kebersamaan
              dengan tampilan yang menarik dan penuh identitas. Pabrik &
              instansi dapat memanfaatkan kaos ini sebagai seragam harian yang
              fungsional namun tetap bergaya. Sementara untuk kebutuhan promosi
              dan sekolah, kami menawarkan kaos dengan harga terjangkau namun
              tetap berkualitas, sangat efektif untuk kampanye branding,
              kegiatan siswa, hingga souvenir acara.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              alt="Mobile phone screenshot showing a yellow header with a man in a blue shirt holding a tool, text 'Learn Skill Development Anywhere.. Anytime..!' and a mobile number input field with Indian flag"
              className="w-[300px] h-auto rounded-xl shadow-md"
              src={divisiD325}
              width={300}
              height={600}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
