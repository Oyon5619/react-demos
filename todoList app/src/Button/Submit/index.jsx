import './index.css'
export default function SubmitButton({ onClick }) {
  return (
    <button className="submit" onClick={onClick}>
      <i className="fa fa-save"/>
    </button>
  )
}