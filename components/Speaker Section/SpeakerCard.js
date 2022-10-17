import React from 'react'

function SpeakerCard({name , picture}) {
  return (
    <div className='w-1/6 h-1/4 flex justify-center items-center flex-col bg-white m-[6vmax] py-[1vmax] ticket'>
        <img className='w-[14vmax]' src={picture} />
        <div className='flex mx-[5%] my-[3%] flex-col p-[10%]  justify-center items-center border-dashed border-[1.2px] border-[#D9D9D9]'>
            <h1 className='text-[1.3vmax] text-[#542436] font-["Consolas"]'>{name}</h1>
            <div className='flex justify-center items-center flex-col'>
                <h3 className='text-[1.1vmax] flex justify-center items-center font-[400] text-[#363636]'>Co-Founder</h3>
                <h3 className='text-[1vmax] flex justify-center items-center font-[400] text-[#363636]'>Coding Ninjas</h3>

            </div>
            
        </div>
    </div>
  )
}

export default SpeakerCard