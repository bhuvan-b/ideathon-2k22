import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/SpeakerSection";
import FaqSection from "../components/FAQS/FaqSection";

export default function Home() {
  return (
    <div>
      <Image
        className="-z-10"
        src={"https://i.imgur.com/AvmKsjU.jpg"}
        alt={""}
        layout="fill"
      />
      <FaqSection />
=======
import LandingSection from "../components/LandingSection";

export default function Home() {
  return (
    <div className="">
      <LandingSection />

    </div>
  );
}
