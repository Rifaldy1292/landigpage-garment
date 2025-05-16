import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

import ContactUs from "@/pages/contactUs";
import Pelayanan from "@/pages/pelayanan";
import AboutPage from "@/pages/aboutMe";
import CatalogPage from "@/pages/catalog";
function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<AboutPage />} path="/tentang-kami" />
      <Route element={<Pelayanan />} path="/pelayanan" />
      <Route element={<CatalogPage />} path="/catalog" />
      <Route element={<ContactUs />} path="/hubungi-kami" />
    </Routes>
  );
}

export default App;
