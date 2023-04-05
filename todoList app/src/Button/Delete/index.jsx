import './index.css';
export default function DeleteButton({ onClick }) {
  return (
    <button className="delete" onClick={onClick}>
      <i className="fa fa-close"/>
    </button>
  )
}