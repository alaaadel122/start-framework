import React, { useState } from 'react'

export default function Gallery({ img ,handleImageClick}) {
    
     return (
          <div className='col-md-4'>
               <div className="galleryItem position-relative">
                    <img src={img} alt="gallertImg" className='w-100 rounded-4'  />
                    <div className="overlayImg position-absolute top-0 start-0 end-0 bottom-0 rounded-4 d-flex justify-content-center align-items-center "  onClick={() => handleImageClick(img)}>
                         <div className='icon-pls '>
                              <i className="fa-solid fa-plus fa-6x  fw-bold text-white" ></i>
                         </div>
                    </div>
               </div>
          </div>
     )
}
