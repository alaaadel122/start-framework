import React from 'react'
import avatar from '../assets/avataaars.svg'
import ComponentAddress from './ComponentAddress'
export default function Home() {
     return (
          <div className='home-section d-flex justify-content-center align-items-center  '>
               <div>
               <div className='img-section ms-5'>
                    <img src={avatar} alt="" />
               </div>
               <ComponentAddress componentName={"start Framework"} color={'#fff'} />
               <div className='star text-center' style={{ color: '#fff', }}><i className='fa-solid fa-star fa-2x'></i></div>

               <p className='text-center text-white fs-4 mt-3'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
          </div>
     )
}
