import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/Speaker Section/SpeakerSection";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/About/AboutSection";
import FaqSection from "../components/FAQS/FaqSection";
import Footer from "../components/Footer/Footer";
import React_Timeline from "../components/Time/React_Timeline";
import NavBar from "../components/NavBar.jsx";
export default function Home() {
  return (
    <>
      <NavBar />
    <div className="mainparent">
      <div className="mainsubparent space-y-12">
        <LandingSection />
        <AboutSection />
        <React_Timeline />
        <SpeakerSection />
        <FaqSection />
        <Footer />
      </div>
     </div>
    </>
  );
}
