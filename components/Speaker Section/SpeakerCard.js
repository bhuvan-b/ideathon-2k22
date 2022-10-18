import React from 'react'

function SpeakerCard({name , picture , Designation , Company}) {
  return (
    <div className='w-1/6 h-1/4 flex justify-center items-center flex-col bg-white lg:m-[6vmax] sm:mx-[20vmax]  sm:my-[3vmax] px-0 pt-[0.5vmax] pb-[1vmax] ticket'>
        <img className='w-[93%]' src={picture} />
        <div className='flex lg:w-[93%] -z-10 sm:h-[60%] sm:w-[60%] h-[85%] mx-[5%] my-[5%] flex-col px-[5%] py-[3%]  justify-center items-center border-dashed border-[1.2px] border-[#9F8772] ticket-inner'>
            <h1 className='text-[1.3vmax] text-[#542436] font-["Consolas"] font-[700]'>{name}</h1>
            <div className='flex justify-center items-center flex-col'>
                <h3 className='text-[1.1vmax] flex justify-center items-center font-[400] text-[#363636]'>{Designation}</h3>
                <h3 className='text-[1vmax] flex justify-center items-center font-[400] text-[#363636]'>{Company}</h3>
            </div>
            
        </div>
    </div>
  )
}

export default SpeakerCard