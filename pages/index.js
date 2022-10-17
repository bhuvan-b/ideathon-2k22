import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/Speaker Section/SpeakerSection";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/About/AboutSection";

export default function Home() {
  return (
    <div className="mainparent">
      <div className="mainsubparent space-y-24 py-14">
        <LandingSection />
        <AboutSection />
        <SpeakerSection />
      </div>
    </div>
  );
}
