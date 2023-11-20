import React,{useState} from 'react';
import './App.css';
import axios from 'axios';






function App() {

  const [sent,setsent] = useState("");
  const ret = async () =>{
try {
      let as = await axios.get('http://bafybeigawijxptx4ltml5o7ujg2isgwovatciie43bpznso7qnb7tvmnbm.ipfs.localhost:8080/?filename=Front.java');
      console.log(as.data);
      setsent(as.data);
} catch (error) {
  console.log(error)
}
  
  }




  return (
    <div className="App">

    <button className='post' onClick={()=>{ret()}} > send   </button>
<div>
{sent}

</div>
    </div>
  );
}

export default App;
