import React, { useState } from 'react'
import ComponentAddress from './ComponentAddress'
import Gallery from './Gallery'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'
export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  let [imgs, setImg] = useState([img1, img2, img3, img1, img2, img3])
  function handleImageClick(src) {
    setSelectedImage(src);
    console.log('clicked')

  }
  function handleClose() { setSelectedImage(null)};
  return (
    <div className='pt-5 mb-5'> 
      <div className='portifolioSection d-flex  justify-content-center  align-items-center flex-column pt-5'>
        <div>
          <ComponentAddress componentName={'portfolio component'} color={'#2C3E50'} />
          <div className='star-blue text-center' style={{ color: '#2C3E50', }}><i className='fa-solid fa-star fa-2x'></i></div>
        </div>
        <div className='container mb-5 mt-3'>
          <div className='row g-3 pb-5 mb-5'>
            {
              imgs.map((img, idx) => <Gallery key={idx} img={img} handleImageClick={handleImageClick} ></Gallery>)
            }
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay"  onClick={handleClose}>
          <img src={selectedImage} alt="fullscreen" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
        </div>
      )}
    </div>
  )
}
