import React from 'react'

function SpeakerCard({name , picture , Designation , Company}) {
  return (
    <div className='w-1/6 h-1/4 flex justify-center items-center flex-col bg-white m-[6vmax] py-[1vmax] ticket'>
        <img className='w-[14vmax]' src={picture} />
        <div className='flex mx-[5%] my-[3%] flex-col p-[10%]  justify-center items-center border-dashed border-[1.2px] border-[#D9D9D9] ticket-inner'>
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