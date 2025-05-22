import React from 'react'
import s from './Form.module.scss'

const Form = () => {
  return (
    <>
    <div className="container">
        <div className={s.form_main}>
            <div className={s.form_left}>
                <h1>STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</h1>
            </div>
            <div className={s.form_right}>
                  <input type="text" placeholder='Enter your email address' />
                  <button>Subscribe to Newsletterz</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form