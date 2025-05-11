import DefaultLayout from "@/layouts/default";

import { useEffect } from "react";
export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, []);
  return <DefaultLayout></DefaultLayout>;
}
