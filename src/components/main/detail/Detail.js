import React from 'react'
import User from '../../../assets/img/user-1.jpg'
import User2 from '../../../assets/img/user-2.jpg'
import User3 from '../../../assets/img/user-3.jpg'
import User4 from '../../../assets/img/user-4.jpg'
import arrow from '../../../assets/icomoon/SVG/chevron-thin-right.svg'

export default function Detail() {
  return (
    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
            <li className="list__item">
              <img src={arrow} className="list__item-icon"/>
              Close to the beach  
            </li>
            <li className="list__item">
              <img src={arrow} className="list__item-icon"/>                         
              Breakfast included</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                       
              Free airport shuttle</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                       
              Free wifi in all rooms</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                     
              Air conditioning and heating</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                       
              Pets allowed</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                     
              We speak all languages</li>
            <li className="list__item">
            <img src={arrow} className="list__item-icon"/>                                     
              Perfect for families</li>
        </ul>

        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel.
          </p>
          <div className="recommend__friends">
            <img className="recommend__photo" src={User}/>
            <img className="recommend__photo" src={User2}/>
            <img className="recommend__photo" src={User3}/>
            <img className="recommend__photo" src={User4}/>
          </div>
        </div>

      </div>
      <div className="user-reviews">
        User reviews
      </div>
    </div>
  )
}
