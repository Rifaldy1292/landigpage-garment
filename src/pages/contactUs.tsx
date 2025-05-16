import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useEffect } from "react";
import { useState } from "react";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendToWhatsApp = (e: any) => {
    e.preventDefault(); // Cegah reload

    const phone = "6289514636994"; // Ganti dengan nomor WA tujuan (pakai kode negara, tanpa +)
    const text = `Halo, saya ${form.name}%0AEmail: ${form.email}%0ASubject: ${form.subject}%0APesan: ${form.message}`;

    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Contact Us
        </h1>

        <form className="space-y-6 bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              value={form.message} // gunakan form.message
              onChange={(e) => setForm({ ...form, message: e.target.value })} // update message
              rows={6}
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={sendToWhatsApp}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
