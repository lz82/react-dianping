import React from 'react';
import { Link } from 'react-router-dom';
import css from './index.module.less';

export default function SearchBox(props) {
  const { txt } = props;
  return (
    <div className={css['search-box-wrapper']}>
      <Link to="/search" className={css['text']}>
        {txt}
      </Link>
    </div>
  );
}
