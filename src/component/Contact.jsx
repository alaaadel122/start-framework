import React from 'react'
import ComponentAddress from './ComponentAddress'

export default function Contact() {
  return (
    <div className='contactSection  d-flex flex-column justify-content-center align-items-center '>
        <div>
          <ComponentAddress componentName={'conatct section'} color={'#2C3E50'} />
          <div className='star-blue text-center' style={{ color: '#2C3E50', }}><i className='fa-solid fa-star fa-2x'></i></div>
        </div>
      <div className='form-section formpt-5 w-50 m-auto border-0'>
        <input placeholder='User Name' type='text' className='form-control border-0 border-bottom py-3 position-relative ' />
        <input placeholder='User Age' type='number' className='form-control border-0 border-bottom py-3 mt-5 position-relative ' />
        <input placeholder='User Email' type='email' className='form-control border-0 border-bottom py-3 mt-5 position-relative ' />
        <input placeholder='User Password' type='password' className='form-control border-0 border-bottom py-3 position-relative mt-5 ' />
        <button type='submit' className='btn text-white mt-4 w-25 p-2 ' style={{ backgroundColor: '#1abc9c' }}>Send Message</button>
      </div>
    </div>
  )
}
