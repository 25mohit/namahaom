import Image from "next/image";
import Navbar from "./components/Utils/Navbar";
import Footer from "./components/Utils/Footer";
import HomeSection from "./components/Section/HomeSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Footer />
    </div>
  );
}
