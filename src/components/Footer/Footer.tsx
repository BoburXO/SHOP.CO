import React from 'react';
import s from './footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.f_main}>
          <div className={s.item}>
            <img className={s.f_logo} src='./logo.svg' alt='' />
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <a href='#'>
              <img src='./Social.svg' alt='' />
            </a>
          </div>
          <div className={s.item}>
            <h3>Company</h3>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Features</Link>
            <Link href={'/'}>Works</Link>
            <Link href={'/'}>Career</Link>
          </div>
          <div className={s.item}>
            <h3>Help</h3>
            <Link href={'/'}>Customer Support</Link>
            <Link href={'/'}>Delivery Details</Link>
            <Link href={'/'}>Terms & Conditions</Link>
            <Link href={'/'}>Privacy Policy</Link>
          </div>
          <div className={s.item}>
            <h3>FAQ</h3>
            <Link href={'/'}>Account</Link>
            <Link href={'/'}>Manage Deliveries</Link>
            <Link href={'/'}>Orders</Link>
            <Link href={'/'}>Payments</Link>
          </div>
          <div className={s.item}>
            <h3>Resources</h3>
            <Link href={'/'}>Free eBooks</Link>
            <Link href={'/'}>Development Tutorial</Link>
            <Link href={'/'}>How to - Blog</Link>
            <Link href={'/'}>Youtube Playlist</Link>
          </div>
        </div>
        <hr />
        <div className={s.f_last}>
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <a href='#'>
            <img src='./cards.svg' alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
