import React from 'react';
import s from './header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className='container'>
          <div className={s.h_main}>
            <div className={s.h_left}>
              <h1>
                FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
              </h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link href={'/shop'}>Shop Now</Link>
              <div className={s.h_target}>
                <span>
                  <h2>200+</h2>
                  <p>International Brands</p>
                </span>
                <span>
                  <h2>2,000+</h2>
                  <p>High-Quality Products</p>
                </span>
                <span>
                  <h2>30,000+</h2>
                  <p>Happy Customers</p>
                </span>
              </div>
            </div>
            <div className={s.h_right}>
              <img src='./hero.png' alt='' />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
