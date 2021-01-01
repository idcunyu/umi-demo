import React, {useState} from 'react';
import style from './index.less';
import { Prompt } from 'umi';

export default (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Prompt when={checked} message="你确定要离开么？" />
      <h1 className={style.title}>
        <span className={style.span}>Page index span</span>
        <div className={style['div']}>Page index div</div>
      </h1>
      <div onClick={()=>setChecked(!checked)}>切换一下</div>
      <div onClick={()=>props.history.push('/list')}>Go to list page</div>
    </div>
  );
}
