import {useState} from 'react'

export default function Bai3() {
    const [color, setColor] = useState("black");
    const handleChangeColor = () => {
        setColor(color === "black" ? "red" : "black");
    }
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h2 style={{ color: color }}>Tiêu đề văn bản</h2>
      <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  )
}
