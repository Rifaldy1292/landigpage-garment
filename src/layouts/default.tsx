import { Link } from "@heroui/link";
import SecondaryContent from "@/components/secondaryContent";
import { Navbar } from "@/components/navbar";
import IndexContent from "@/components/indexContent";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <IndexContent />
      <SecondaryContent />
      {/* <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main> */}
    </div>
  );
}
