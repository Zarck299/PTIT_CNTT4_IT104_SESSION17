import {useState} from 'react'

export default function Exercise01() {
    const [name, setName] = useState<string>("Vu Hong Anh");
  return (
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h2>Họ và tên: {name}</h2>
    </div>
  )
}
