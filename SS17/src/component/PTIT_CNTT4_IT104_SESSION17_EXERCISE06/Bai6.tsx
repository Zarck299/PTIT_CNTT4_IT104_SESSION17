import {useState} from 'react'

export default function CountText() {
    const [text, setText] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }    
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <input type="text" placeholder='Nhap noi dung' value={text} onChange={handleChange} style={{padding: "5px", width: "250px"}}/>
      <div style={{marginTop: "10px"}}>
        <p>Số kí tự: {text.length}</p>
      </div>
    </div>
  )
}
