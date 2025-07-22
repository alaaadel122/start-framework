import React from 'react'
import ComponentAddress from './ComponentAddress'

export default function About() {
     return (
          <div className='about-section  d-flex flex-column justify-content-center align-items-center'>
               <div>
                    <ComponentAddress componentName={'about component'} color={'#fff'} />
                    <div className='star text-center ' style={{ color: '#fff', }}><i className='fa-solid fa-star fa-2x'></i></div>
               </div>
               <div className='container'>
                    <div className="row text-white fs-5 mt-4">
                         <div className="col-md-6">
                              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                         </div>
                         <div className="col-md-6">
                              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                         </div>
                    </div>

               </div>
          </div>
     )
}
