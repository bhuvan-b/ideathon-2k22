import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/Speaker Section/SpeakerSection";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/About/AboutSection";
import SponsorSection from "../components/Sponsor/sponsorSection";
import FaqSection from "../components/FAQS/FaqSection";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/Time/Timeline";
import NavBar from "../components/NavBar.jsx";
import EventShelf from "../components/EventShelf/EventShelf";
import Finalists from "../components/Finalists";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ideathon 2K22 | IIIT Pune</title>
        {/* <link rel="icon" href="https://i.imgur.com/oVZTwYa.png" /> */}
      </Head>
      <NavBar />
      <div className="mainparent">
        <div className="mainsubparent space-y-12">
          <LandingSection />
          <AboutSection />
          <EventShelf />
          <Timeline />
          {/* <SpeakerSection /> */}
          {/* <Finalists /> */}
          <FaqSection />
          <SponsorSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
