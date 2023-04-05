import './index.css';
import Card from '../Card';
import FinishButton from '../Button/Finish';
import DeleteButton from '../Button/Delete';
import { useEffect, useState } from 'react';

export function Item({ content, finish, onFinish , onDelete }) {
  return (
    <div className="item">
      {content}
      <span className="opr">
        { !finish && <FinishButton onClick={onFinish}/> }
        <DeleteButton onClick={onDelete}/>
      </span>
    </div>
  )
}

export default function TodoList({ newTodo }) {
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  let cur = null;

  // 添加从sidebar接收过来的新todo
  useEffect(() => {
    if (newTodo !== cur) {
      newTodo['id'] = id;
      setId(id + 1);
      list.push(newTodo);
      cur = newTodo;
    }
  },[newTodo]);

  function handleFinish(obj) {
    let res = list.map(item => {
      if (item.id === obj.id) {
        item.finish = true;
      }
      return item;
    });
    setList(res);
  }
  function handleDelete(obj) {
    let res = list.filter(item => item.id != obj.id);
    setList(res);
  }

  const list1 = list.filter(current => current.finish === false).map(current => 
    <Item 
      content={current.content} 
      finish={current.finish}
      onFinish={() => handleFinish(current)}
      onDelete={() => handleDelete(current)}
      key={current.id}/>);

  const list2 = list.filter(current => current.finish === true).map(current => 
    <Item
      onFinish={() => handleFinish(current)}
      onDelete={() => handleDelete(current)}
      content={current.content} 
      finish={current.finish} 
      key={current.id}/>);

  return (
    <div className="todos">
      <Card>
        <h3 style={{color:'darkred', fontSize: '40px'}}>Current</h3>
        <hr/>
        { list1.length !== 0 ? list1 : <p className="notice">There's nothing......</p> }
      </Card>
      <Card>
        <h3 style={{color:'darkgreen', fontSize: '40px'}}>Finished</h3>
        <hr/>
        { list2.length !== 0 ? list2 : <p className="notice">There's nothing......</p> }
      </Card>
    </div>  
  )
}