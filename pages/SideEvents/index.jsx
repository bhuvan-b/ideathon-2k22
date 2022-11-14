import React from 'react'
import  NavBar from "../../components/NavBar.jsx"
import FunCard from '../../components/FunEvents/FunCard.jsx'
import Head from "next/head";

const index = () => {
  return (
    <>
         <Head>
        <title>Side Events | Ideathon 2K22</title>
        {/* <link rel="icon" href="https://i.imgur.com/oVZTwYa.png" /> */}
      </Head>
    <NavBar/>
    <FunCard/>

    </>
  )
}

export default index