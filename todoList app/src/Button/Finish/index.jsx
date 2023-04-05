import './index.css';
export default function FinishButton({ onClick }) {
  return (
    <button className="finish" onClick={onClick}>
      <i className="fa fa-check"/>
    </button>
  )
}