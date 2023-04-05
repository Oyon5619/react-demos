import { useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';

export default function Layout({ children, layoutPipe }) {
  const [fold, setFold] = useState(false);

  function getItemPipe(obj) {
    layoutPipe(obj);
  }

  return (
    <div className="layout">
      <SideBar isFold={fold} itemPipe={getItemPipe}/>
      <div style={fold?{}:{marginLeft:'20%'}}>
        <Header onFold={()=>setFold(!fold)}/>
        {children}
      </div>
    </div>
  )
}