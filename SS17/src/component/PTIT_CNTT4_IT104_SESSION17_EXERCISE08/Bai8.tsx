import {useState} from 'react'

export default function Bai8() {
    const [hobbies, setHobbies] = useState<string[]>([]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setHobbies(prev => 
            prev.includes(value)
            ? prev.filter(hobby => hobby !== value)
            : [...prev, value]
        );
    }    
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Sở thích: {JSON.stringify(hobbies)}</h3>

      <label>
        <input
          type="checkbox"
          value="Đi chơi"
          checked={hobbies.includes("Đi chơi")}
          onChange={handleChange}
        />
        Đi chơi
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          value="Code"
          checked={hobbies.includes("Code")}
          onChange={handleChange}
        />
        Code
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          value="Bơi lội"
          checked={hobbies.includes("Bơi lội")}
          onChange={handleChange}
        />
        Bơi lội
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          value="Nhảy dây"
          checked={hobbies.includes("Nhảy dây")}
          onChange={handleChange}
        />
        Nhảy dây
      </label>
    </div>
  )
}
