
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [num,setNum] = useState(0);

  useEffect(()=>{
    
  },[num])
  return (
    <div>
        <p>Button clicked {num} times</p>
        <button onClick={()=>setNum(num+1)}>button</button>
    </div>
  )
}

export default App