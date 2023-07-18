import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">

        
         <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home_image" />
         <div className="home_row">
              <Product id="1233421" title = "Seagate Portable 2TB External Hard Drive HDD" price={5.6} rating={4} image ="https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg" />
              <Product id="1233421" title = "Apple AirPods Pro (2nd Generation) Wireless Earbuds" price={100} rating={4} image ="https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg" />
              
              
          
         </div>
         <div className="home_row">
         <Product id="1233421" title = "LeadsaiL Wireless Keyboard and Mouse, Wireless Mouse and Keyboard Combo," price={21.9} rating={2} image ="https://m.media-amazon.com/images/I/61vuFJ0mzOL._AC_SL1500_.jpg" />
         <Product id="1233421" title = 'Acer 2023 Newest Aspire 5 Slim Essential Laptop, 15.6" Full HD IPS Display' price={458.9} rating={5} image ="https://m.media-amazon.com/images/I/71SCvh0L3OL._AC_SL1500_.jpg" />
         <Product id="1233421" title = 'Sceptre 24" Professional Thin 75Hz 1080p LED Monitor'  price={99.9} rating={4} image ="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_SL1257_.jpg" />
         </div>
         <div className="home_row">
              <Product id="1233421" title = "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps " price={55.8} rating={1} image ="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SL1500_.jpg" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home
