import React from 'react'
import s from './logos.module.scss'

const Logos = () => {
  return (
    <>
    <div className={s.logos}>
        <div className="container">
            <div className={s.logos_wrapper}>
                <img src="./versace.svg" alt="" />
                <img src="./zara.svg" alt="" />
                <img src="./gucci.svg" alt="" />
                <img src="./prada.svg" alt="" />
                <img src="./calvin.svg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Logos