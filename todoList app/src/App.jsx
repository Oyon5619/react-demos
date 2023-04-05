import './App.css';
import TodoList from './TodoList';
import Layout from './Layout';
import { useState } from 'react';

export default function App() {
  const [item, setItem] = useState(null);

  function getLayoutPipe(e) {
    setItem(e);
  }

  return (
    <div className="app">
      <Layout layoutPipe={getLayoutPipe}>
        <TodoList newTodo={item}/>
      </Layout>
    </div>
  )
}