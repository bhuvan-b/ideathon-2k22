import React from 'react'
import Big from '../Global/Titles/Big';
import TinyMedium from '../Global/Titles/TinyMedium';

function SpeakerCard({name , picture}) {
  return (
    <div className='w-1/6 h-1/4 flex justify-center items-center flex-col bg-white m-[6vmax] py-[1vmax] ticket'>
      <img className='w-[14vmax]' src={picture} />
        <div className='flex mx-[5%] my-[3%] flex-col p-[10%]  justify-center items-center border-dashed border-[1.2px] border-[#D9D9D9]'>
            <Big classes={'text-[1.3vmax] text-[#542436] font-["Consolas"]'} text={ name } />
            <div className='flex justify-center items-center flex-col'>
                <TinyMedium classes={ 'text-[1.1vmax] flex justify-center items-center font-[400] text-[#363636]' } text="Co-Founder" />
                <TinyMedium classes={ 'text-[1vmax] flex justify-center items-center font-[400] text-[#363636]' } text="Coding Ninjas" />
            </div>
            
        </div>
    </div>
  )
}

export default SpeakerCard