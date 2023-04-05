import './index.css';

export default function Header({ onFold }) {
  return (
    <>
      <div className="header" onClick={onFold}>
        <span><i className="fa fa-adjust fa-edit"/></span>Todo List
      </div>
    </> 
  )
}