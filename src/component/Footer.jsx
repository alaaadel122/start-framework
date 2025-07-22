import React from 'react'

export default function Footer() {
     return (
          <div className='footer-style'>
               <div className="container">
                    <div className="row">
                         <div className="col-md-4">
                              <div className='text-center text-white pt-5'>
                                   <h3 className='text-white fw-bold fs-4 text-uppercase'>Location</h3>
                                   <p className='pt-4'>2215 John Daniel Drive</p>

                                   <p>Clark, MO 65243</p>
                              </div>
                         </div>
                         <div className="col-md-4">
                              <div className='text-center text-white pt-5'>
                                   <h3 className='text-white fw-bold fs-4 text-uppercase'>AROUND THE WEB</h3>
                                   <ul className='d-flex list-unstyled justify-content-center pt-4'>
                                        <li className='me-3'>
                                             <div className=' item-icon'>
                                                  <i className='fa-brands fa-facebook fa-xl'></i>
                                             </div>
                                        </li>
                                        <li className='me-3'>
                                             <div className='  item-icon'>
                                                  <i className='fa-brands fa-twitter fa-xl'></i>
                                             </div></li>
                                        <li className='me-3'>
                                             <div className='  item-icon'>
                                                  <i className="fa-brands fa-linkedin-in fa-xl"></i>
                                             </div>
                                        </li>
                                        <li className='me-3'>
                                             <div className='  item-icon'>
                                                  <i className="fa-solid fa-globe fa-xl"></i>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="col-md-4">
                              <div className='text-center text-white pt-5'>
                                   <h3 className='text-white fw-bold fs-4 text-uppercase'>ABOUT FREELANCER</h3>
                                   <p className='pt-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>


                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}
