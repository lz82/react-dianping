import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import css from './index.module.less';

export default function HeadLine(props) {
  const { data } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true
  };

  return (
    <div className={css['headline-wrapper']}>
      <Slider {...settings}>
        {data
          ? data.map((item) => (
              <div key="item.title">
                <span>{item.title}</span>
              </div>
            ))
          : null}
      </Slider>
    </div>
  );
}
