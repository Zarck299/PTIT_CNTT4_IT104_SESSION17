import {useState} from 'react'

export default function Bai4() {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const handleToggle = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <button onClick={handleToggle}>
        {isVisible ? "Ẩn" : "Hiện"}
      </button>
        {isVisible && <p>Đoạn văn bản được hiển thị</p>}
    </div>
  )
}
