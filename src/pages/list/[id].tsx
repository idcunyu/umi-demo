import React from 'react';
import style from './index.less';

export default (props) => {
  console.log(props)
  return (
    <div>
      <h1 className={`${style['title-list']} ${style['title-end']}`}>Page List </h1>
    </div>
  );
}
