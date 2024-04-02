import './Dropdown.css'

const Dropdown = ({data,setDifficultyChange}) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDifficultyChange(e.target.value)} name="" id="">
        {
          data.map((dt,i) => (
            <option value={dt} key={i}>{dt}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown