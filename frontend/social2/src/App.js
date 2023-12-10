import Web3 from 'web3';
import StringStorageContract from './contracts/StringStorage.json'; // Import your contract ABI

import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Postcard from './components/postcard/postcard';
import axios from "axios";
import { Button } from '@mui/material';



 function  App () {
 let web3;
  // if (window.ethereum) {
    // Use MetaMask provider
    web3 = new Web3(window.ethereum);
  
    // Request user permission to connect to their MetaMask wallet
    async function connectWallet() {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Log the connected accounts
        console.log('Connected to wallet. Accounts:', accounts);
  
        // Now, 'accounts' is an array of the user's Ethereum addresses
      } catch (error) {
        console.error('Error connecting to wallet:', error);
      }
    }
  // } else {
  //   console.error('MetaMask not detected. You should consider trying MetaMask!');
  // }


const contractAddress = '0x35E91591E3e0A57d911ebA57c692023aB66F79a5';
const contract = new web3.eth.Contract(StringStorageContract, contractAddress);


const [e,sete] = useState([]);
 
  // https://bafybeigekwf3tkpyfguwxtaetbu5yz2uywdweskcxttsr7jt3igoc4d5ye.ipfs.w3s.link/ipfs.json
  const uploadImage = async (e)=>{

    // console.log(e);
    let file = e.target.files[0];
    let y= await convertbase64(file);
    setf(y);
    console.log(y);
  };


  // Example: Call a view function
async function getString(index) {
  const result = await contract.methods.getString(index).call();
  console.log('String at index', index, ':', result);
}

// Example: Send a transaction
async function saveString(newString) {
  try {
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0]; // Use the first account, or handle multiple accounts as needed

    // Send transaction
    const result = await contract.methods.saveString(newString).send({ from: sender });
    console.log('Transaction successful. Transaction hash:', result.transactionHash);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }}


  const convertbase64= async(file)=>{
    return new Promise((resolve,reject)=>{
      const fileReader= new FileReader();
       fileReader.readAsDataURL(file);
        fileReader.onload = ()=>{
        resolve(file.result);
      }  
      fileReader.onerror = (error)=>{
        reject(error);
      }  
    })
  }
  
  const [f,setf] = useState({});
  let rr =[];


  // const [img,setimg] = useState('');
  // // Example: Call a view function
  async function getString(index) {
    const result = await contract.methods.getString(index).call();
    console.log('String at index', index, ':', result);
    // setimg(s);
    // let i = await axios.get("https://bafybeigblhffy6jq2ntpviby2eacgvimgc5s6eceggysmv7oani3f4ksra.ipfs.w3s.link/ipfs.json");
    let i = await axios.get(`https://${result}`);
    console.log(i);
    // setList( i.data.name);
    console.log(i.data);

    return i.data.picture.toString();

  }



  //   // setimg(i.data.picture);
  //   // return result;
  // }




  


    // useEffect(() => {
    //   for (let k = 1; k < 5; k++) {
    //     // const element = array[k];
    //    let r =  getString(k);
    //    rr+=r;
    //    // setf(r);
    //   }
    // }, []);
    const [mar,setmar] = useState(''); 

  function postadd(index) {
  let r =  getString(index);

console.log("wrhe",r);

    return(
    <Postcard name="kjs"/>
    )
  }
  
const [inn,setinn] = useState(1);


return (
    <div className="App">
            {/* <img src='./components/smd.jpg' alt='Social Media Dapp' ></img> */}

<Navbar/>    
  <div>
        {/* <div>
          <Button onClick={ async()=>{
 let  a = await axios.get("https://bafybeigekwf3tkpyfguwxtaetbu5yz2uywdweskcxttsr7jt3igoc4d5ye.ipfs.w3s.link/ipfs.json");
 console.log(a);
  sete(a.data.picture);
          }}>jjjj</Button>
          <input type='file' onChange={async(e)=>{
            await uploadImage(e);
          }}></input>
          <br></br>
            {f}

        </div> */}
        {/* {postadd(1)} */}
<div >
  <Button variant="contained" onClick={()=>{
    
  console.log(inn);
// integer=integer-1;

// console.log(integer);
setinn(inn-1)
  }}>prev</Button>
<Postcard name="lldslf" i={inn}/>
<Button variant="contained" onClick={()=>{
  console.log(inn);
// integer=inn+1;

console.log(inn);
setinn(inn+1)

  }}>next</Button>

</div>
      </div>

      <footer>
        <div>
          made by Ishant S. Dahiwale
        </div>
      </footer>
    </div>
  );
}

export default App;
