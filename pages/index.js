import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import  SpeakerSection  from "../components/SpeakerSection";
import AboutSection from "../components/About/AboutSection";


export default function Home() {
  return (
    <div>
        
      <Image className="-z-10" src={'https://i.imgur.com/AvmKsjU.jpg'}  layout='fill'/>
      <AboutSection/>
    </div>
  );
}
