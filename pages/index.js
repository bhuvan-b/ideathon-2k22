import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/Speaker Section/SpeakerSection";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/About/AboutSection";
import FaqSection from "../components/FAQS/FaqSection";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <div className="space-y-12">
      <LandingSection />
      <AboutSection />
      <SpeakerSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
