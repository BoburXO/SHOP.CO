import React from 'react';
import s from './comments.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { comments } from '@/db/comments';
import Rating from '@mui/material/Rating';


const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const Comments = () => {
  return (
    <>
      <div className={s.comments_wrap}>
        <div className='container'>
          <h1>OUR HAPPY CUSTOMERS</h1>
          <div className='slider-container'>
            <Slider {...settings}>
              {comments.map((el) => {
                return (
                  <a
                    href={el.github}
                    target='_blank'
                    key={el.id}
                    className={s.comment}
                  >
                    <div className={s.comment_top}>
                      <span>
                        <Rating
                          name='simple-controlled'
                          value={el.rating}
                          readOnly
                        />
                        <h4>{el.username}</h4>
                      </span>
                      <img src={el.photo} alt='' />
                    </div>
                    <p>{el.comment}</p>
                  </a>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
