import React from 'react';
import style from './index.less';

export default () => {
  return (
    <div>
      <h1 className={`${style['title-list']} ${style['title-end']}`}>Page List</h1>
    </div>
  );
}
