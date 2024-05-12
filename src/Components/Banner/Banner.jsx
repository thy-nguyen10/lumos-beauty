import React from 'react'
import './Banner.css'
import slider from '../Assets/slider.jpg'
import sun from '../Assets/remove-sun.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner-left">
                <div className="h2">
                    <div className="banner-hand-icon">
                        <p className='hayde'>Hãy để </p>
                        <div className="sun-icon">
                            <p>vẻ đẹp của bạn </p>
                            <img className="img-sun" src={sun} alt="" />
                        </div>
                    </div>
                    <h2>LUMOS-BEAUTY</h2>
                </div>
            </div>
            <div className="banner-right">
                <div><img src={slider} alt="" /></div>
            </div>
        </div>
    )
}

export default Banner
