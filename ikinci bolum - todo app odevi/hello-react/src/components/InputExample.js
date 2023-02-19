import {useState} from 'react'

export default function InputExample() {
    const [name, setName] = useState("mehmet")
  return (
    <div>
        Please enter a name
        <br />
        <input value={name} onChange={(event)=>{setName(event.target.value)}}/>
         <br />
        {name}
    </div>
  )
}
