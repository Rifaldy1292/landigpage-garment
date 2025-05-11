import SecondaryContent from "@/components/secondaryContent";
import { Navbar } from "@/components/navbar";
import IndexContent from "@/components/indexContent";
export default function DefaultLayout() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <IndexContent />
      <SecondaryContent />
    </div>
  );
}
