import React, {useState} from 'react';
import { Button } from 'antd';
import style from './index.less';
import {
  Helmet,
  Prompt,
  useModel,
} from 'umi';

export default (props) => {
  const [checked, setChecked] = useState(false);
  const modelUser = useModel('user');
  const handleClick = () => {
    if(modelUser.user) {
      modelUser.signout()
    } else {
      modelUser.signin()
    }
  }

  return (
    <div>
      <Helmet>
        <title>index 首页 title</title>
        <meta name="description" content="首页ABCD index description" />
        <meta name="keywords" content="index 首页123keywords" />
      </Helmet>
      <Prompt when={checked} message="你确定要离开么？" />
      <h1 className={style.title}>
        <span className={style.span}>Page index span</span>
        <div className={style['div']}>Page index div</div>
      </h1>
      <div>my name is {modelUser.user}</div>
      <Button onClick={()=>setChecked(!checked)}>切换一下</Button>
      <Button type="primary" onClick={()=>props.history.push('/list')}>Go to list page</Button>

      <Button onClick={handleClick}>{modelUser.user ? '退出' : '登录'}</Button>
    </div>
  );
}
