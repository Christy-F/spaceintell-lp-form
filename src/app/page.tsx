import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyCasaGrand from "@/components/WhyCasaGrand";
import InventoryAcrossCorridor from "@/components/InventoryAcrossCorridor";
import TrustSection from "@/components/TrustSection";
import Locations from "@/components/Locations";
import BuiltToSuit from "@/components/BuiltToSuit";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyCasaGrand />
        <InventoryAcrossCorridor />
        {/* <TrustSection /> */}
        <Locations />
        <BuiltToSuit />
        <ConversionSection />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
