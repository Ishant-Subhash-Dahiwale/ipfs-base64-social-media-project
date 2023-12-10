import { Button, Card, Paper } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';
import Web3 from 'web3';
import StringStorageContract from './../../contracts/nft.json'; // Import your contract ABI

function Mint() {


  let web3;
  // if (window.ethereum) {
    // Use MetaMask provider
    web3 = new Web3(window.ethereum);
  const [acc,setacc] = useState('');
    // Request user permission to connect to their MetaMask wallet
    async function connectWallet() {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setacc(accounts);
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
const [hash,sethash] = useState('');

const contractAddress = '0xc0a83c842fdee49eed32fdb99caa9f68fa1e48d7';
const contract = new web3.eth.Contract(StringStorageContract, contractAddress);

  // Example: Call a view function
  async function safemint(index) {
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0]; // Use the first account, or handle multiple accounts as needed
  
    const gas = await contract.methods.safeMint(sender).estimateGas();
    const gasPrice = await web3.eth.getGasPrice();
  
    try {
      const result = await contract.methods.safeMint(sender).send({
        from: sender,
        // value: '0.05 ether' , // Adjust the amount accordingly

        value: web3.utils.toWei('0.0001', 'ether'), // Adjust the amount accordingly
      });
  
      console.log('Transaction Hash:', result.transactionHash);
      console.log('String at index', index, ':', result);
      
    } catch (error) {
      console.error('Error:', error.message);
    }
  }



  // async function safemint() {
  //   const accounts = await web3.eth.getAccounts();
  //   const sender = accounts[0]; // Use the first account, or handle multiple accounts as needed

  //   const result = await contract.methods.safeMint(sender).call();
  //   console.log('String at index', CID, ':', result);
  // }
  
  // Example: Send a transaction
  async function saveString() {
    try {
      const accounts = await web3.eth.getAccounts();
      const sender = accounts[0]; // Use the first account, or handle multiple accounts as needed
  
      // Send transaction
      const result = await contract.methods.saveMetaString(CID).send({ from: sender });
      console.log('Transaction successful. Transaction hash:', result.transactionHash);
      console.log('link', CID, ':', result);
      await safemint();

    } catch (error) {
      console.error('Error sending transaction:', error);
    }}
  














  const [jsonCode, setJsonCode] = useState('');
  const [CID, setcid] = useState('#');

  const send=async()=>{
    try {
      const response = await axios.post('http://localhost:5001/Metadata', jsonCode, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

  
      if (response.status === 200) {
        alert('Metadata sent successfully');
       
       console.log(response.data);
       setcid(response.data.message);

      } else {
        console.error('Failed to send Meta data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }

  
}

      const [n,setn] = useState(true);
    
        const handleJsonChange = (e) => {
          setJsonCode(e.target.value);
        };
    function editor(){
        return( <Card style={{padding:'20px'}}>
{/* <Button onClick={async()=>{
saveString('bafybeiaaf2orgn27hzxc75hhplfkrx3lob3nlp663glw2vcghj4u4kpqbi.ipfs.w3s.link/ipfs.json');
}} >saveMetaString</Button>

<Button onClick={async()=>{
safemint('bafybeiaaf2orgn27hzxc75hhplfkrx3lob3nlp663glw2vcghj4u4kpqbi.ipfs.w3s.link/ipfs.json');
}} >mint</Button> */}
        <h2>Metadata Editor
{n?(<Button onClick={async()=>{
          send();
          setn(false)
        }} style={{height:"60px",width:"150px","margin-left":'660px'}} variant="contained">Enter Metadata</Button>
        ):(<Button onClick={async()=>{
          saveString();
         
          setn(true);
        }} style={{height:"60px",width:"150px","margin-left":'660px'}} variant="contained">Mint</Button>
       )}</h2>
       <Paper   elevation={3} >
<div style={{'margin':'30px'}} >      {CID}
</div> 
<div style={{'margin':'30px'}} >      {}
</div> 
</Paper> 
 <textarea style={{backgroundColor:'#202020',color:'#fff',padding:'20px'}}
          rows={32}
          cols={130}
          value={jsonCode}
          onChange={handleJsonChange}
          placeholder="Enter JSON Metadata here..."
        />
        </Card>
       );
    }


  
    return (
      <div >
        {editor()}

      </div>
    );
}

export default Mint;
