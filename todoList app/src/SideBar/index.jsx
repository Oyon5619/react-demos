// 侧边栏组件
import { useState } from 'react';
import { testData } from '../utils/data.js'
import './index.css';
import SubmitButton from '../Button/Submit';

export default function SideBar({ isFold, itemPipe }) {
  const [list, setList] = useState(testData);
  const [placeholder, setPlaceholder] = useState("Write something here...");
  const [content, setContent] = useState("");

  function handleFocus() {
    setPlaceholder("");
  }
  function handleBlur() {
    setPlaceholder("Write something here...");
  }
  function handleChange(e) {
    setContent(e.target.value);
  }
  function handleAdd() {
    let item = { content: content, finish: false };
    itemPipe(item);
  }

  return (
    <div className={isFold ? 'fold' : 'sidebar'}>
      <div className="title">Side Bar</div>
      <textarea 
        placeholder={placeholder}
        value={content}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div>
        <SubmitButton onClick={handleAdd}/>
      </div>
      <div className="sentence">
        Patience is bitter, but its fruit is sweet.<br/>
        <strong>Jean Jacques Rousseau</strong>
      </div>
    </div>  
  )
}