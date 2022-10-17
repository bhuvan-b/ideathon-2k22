import React from 'react'
const SubHeading = (props) =>  {
  return (
    <div className='subheadparent'>
        <div className='subhead1'>
          <div className=' text-6xl fontsize outlinetext'>{props.head}</div>
        </div>
        <div className='subhead2'>
            <div className=' text-6xl fontsize'>{props.head}</div>
        </div>
        <div className='subhead3'>
            <div className=' text-6xl fontsize'>{props.head}</div>
        </div>
    </div>
    
  )
}

export default SubHeading;