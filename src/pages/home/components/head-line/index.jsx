import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import css from './index.module.less';
// import './inde.less';

export default function HeadLine(props) {
  const { data } = props;
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true
  };

  return (
    <div className={css['headline-wrapper']}>
      <div className={css['logo']} />
      <div className={css['slider-wrapper']}>
        <Slider {...settings}>
          {data.map((item, index) => (
            <a key={index} className={css['slider-item']} href={item.url}>
              <div className={css['title']}>{item.title}</div>
              <div className={css['img-wrapper']}>
                <img alt="" src={item.pic} />
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}
