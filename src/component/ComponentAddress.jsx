import React from 'react'

export default function ComponentAddress({ componentName, color }) {
  return (
    <div className='text-white text-center pt-5 mt-5 text-uppercase'>
      <h2 className='comp-address' style={{ color: color }}>{componentName}</h2>
    </div>
  )
}
