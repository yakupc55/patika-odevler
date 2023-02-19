
import { useState,useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("mehmet")

  useEffect(() => {
    console.log("State güncellendi.");
  },[number])
  
  useEffect(() => {
    console.log("Component mount edildi");
  },[])

  return (
  <>
    <h1>{number}</h1>
    <button onClick={()=>{setNumber(number + 1)}} >Click</button>
    <hr />

    <h1>{name}</h1>
    <button onClick={()=>{setName("mete")}} >Click</button>
    <hr />
    </>
  );
}

export default App;
