import Image from 'next/image'
import React from 'react'
import SpeakerCard from './SpeakerCard'
import Medium from '../Global/Titles/Medium'

function SpeakerSection() {

  const speakers = [
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
    {
      name:'Ankush Singla',
      picture : 'https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg'
    },
  ]


  return (
    <div className='section image h-[500vh] relative'>
      <div className='Speaker-Seciton-Heading'>
        <Medium
          classes={"text-5xl flex p-[1vmax] justify-center items-center text-[#264653] font-bold font-['TabernaSans-Black']"}
          text="SPEAKER "
        />
      </div>
      <Image className="-z-10" layout='fill' style={{width:"100vw" , height:"500vh"}} src={'https://i.imgur.com/AvmKsjU.jpg'} />
      <div className='flex justify-center items-center flex-wrap'>
      {
        speakers?.map((speaker)=>(
          <SpeakerCard
            name={speaker.name}
            picture={speaker.picture}
          />
        ))
      }
      </div>
    </div>
  )
}

export default SpeakerSection