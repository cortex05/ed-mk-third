import React from 'react'
import '../styles/screens/stats.scss'
export default function MyStats() {
  return (
    <div className='stats'>
      <h2 className='sans'>All in Gradient</h2>
      <section className='rows_display'>
        <div className='left_to_right one'></div>
        <div className='left_to_right two'></div>
        <div className='left_to_right three'></div>
        <div className='left_to_right four'></div>
        <div className='left_to_right five'></div>
        <div className='left_to_right six'></div>
      </section>
      <h2 className='sans'>Sample layout</h2>
      <section className='sample_one'>
        <div className='left_to_right six header_dimmensions'>
          <p className=''>This is a header</p>
        </div>
        <div className='left_to_right four body_dimmensions'>
          <h3>This is a main body</h3>
          <div className='detail_dimmensions three'>
            <p>This is a section to display text</p>
          </div>
        </div>
        <div className="left_to_right five" >
          <p>This is a footer</p>
        </div>
      </section>
    </div>
  )
}