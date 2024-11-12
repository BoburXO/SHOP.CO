import React, { useState } from 'react';
import s from './nav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const Nav = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <nav className={s.nav}>
        <div className='container'>
          <div className={s.n_main}>
            <div className={s.n_links}>
              <div className={s.mobile}>
                <img onClick={toggleDrawer} src='./burger.svg' alt='' />
              </div>
              <img
                onClick={() => router.push('/')}
                src='./logo.svg'
                alt='Logo'
              />
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/sales'}>On Sale</Link>
              <Link href={'/news'}>New Arrivals</Link>
              <Link href={'/brands'}>Brands</Link>
            </div>
            <div className={s.n_icons}>
              <input type='text' placeholder='Search for products...' />
              <div className={s.search_mobile}>
                <img src='./search-mobile.svg' alt='' />
              </div>
              <Link href={'/cart'}>
                <img src='./cart.svg' alt='Cart' />
              </Link>
              <Link href={'/profile'}>
                <img src='./profile.svg' alt='Profile' />
              </Link>
            </div>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          size={'70%'}
        >
          <div>
            <div className={s.n_sidebar}>
              <Link href={'/shop'}>Shop</Link>
              <Link href={'/sales'}>On Sale</Link>
              <Link href={'/news'}>New Arrivals</Link>
              <Link href={'/brands'}>Brands</Link>
            </div>
          </div>
        </Drawer>
      </nav>
    </>
  );
};

export default Nav;
