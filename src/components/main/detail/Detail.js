import React from 'react'
import User from '../../../assets/img/user-1.jpg'
import User2 from '../../../assets/img/user-2.jpg'
import User3 from '../../../assets/img/user-3.jpg'
import User4 from '../../../assets/img/user-4.jpg'
import User5 from '../../../assets/img/user-5.jpg'
import User6 from '../../../assets/img/user-6.jpg'
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
        <figure className="review">
           <blockquote class="review__text">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
           </blockquote>

           <figcaption class="review__user">
            <img class="review__photo" src={User5}/>
            <div className="review__user-box">
              <p className="review__user-name">Nick Smith</p>
              <p className="review__user-date">February 23rd, 2019</p>
            </div>

            <div className="review__rating">7.8</div>
           </figcaption>
        </figure>

        <figure className="review">
           <blockquote class="review__text">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
           </blockquote>

           <figcaption class="review__user">
            <img class="review__photo" src={User6}/>
            <div className="review__user-box">
              <p className="review__user-name">Sara Thomas</p>
              <p className="review__user-date">March 22nd, 2019</p>
            </div>

            <div className="review__rating">7.8</div>
           </figcaption>
        </figure>

        <button class="btn-inline">Show all <span>&rarr;</span></button>
      </div>
    </div>
  )
}
