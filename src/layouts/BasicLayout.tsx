import React, { Fragment } from 'react';

export default (props) => {
  return (
    <Fragment>
      头部
      {props.children}
      底部
    </Fragment>
  );
}
