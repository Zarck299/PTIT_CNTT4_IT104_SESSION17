import {useState} from 'react'

export default function Bai5() {
    const [value, setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }    
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      input: <input type="text" placeholder='Nhap noi dung' value={value} onChange={handleChange} />
      <div style={{marginTop: '10px'}}>
        {value && <p>{value}</p>}
      </div>
    </div>
    
  )
}
