import {useState} from 'react'

export default function Select() {
    const [city, setCity] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value);
    }
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <label htmlFor="">
        Chọn thành phố: 
        <select value={city} onChange={handleChange} style={{padding: "5px", marginLeft: "10px"}}>
            <option value="">--Chọn thành phố--</option>
            <option value="Ha Noi">Hà Nội</option>
            <option value="Da Nang">Đà Nẵng</option>
            <option value="TP HCM">TP HCM</option>
        </select>
    
      </label>
        <div style={{marginTop: "10px"}}>
            <p>Bạn đã chọn: {city}</p>
        </div>
    </div>
  )
}
