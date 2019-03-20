import React from 'react'
import Hotel from '../../../assets/img/hotel-1.jpg'
import Hotel2 from '../../../assets/img/hotel-2.jpg'
import Hotel3 from '../../../assets/img/hotel-3.jpg'

export default function Gallery() {
  return (
    <div className="gallery">
        <figure className="gallery__item">
            <img src={Hotel} className="gallery__photo"/>
        </figure>

        <figure className="gallery__item">
            <img src={Hotel2} className="gallery__photo"/>
        </figure>

        <figure className="gallery__item">
            <img src={Hotel3} className="gallery__photo"/>
        </figure>
      </div>
  )
}
