import React, { useState } from 'react';
import './post.css';
import axios from 'axios';
import {Button, Card, Input, TextField} from '@mui/material';
import Web3 from 'web3';
import StringStorageContract from './../contracts/StringStorage.json'; // Import your contract ABI

function Post(){
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    message: '',
  });


  let [recdata,setrecdataa] =useState('') ;

  const [base64Image, setBase64Image] = useState('');

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


const contractAddress = '0x35E91591E3e0A57d911ebA57c692023aB66F79a5';
const contract = new web3.eth.Contract(StringStorageContract, contractAddress);

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
      // var send = web3.eth.sendTransaction({ from: sender, to: toAddress, value: amountToSend });

      const result = await contract.methods.saveString(newString).send({ from: sender });
      console.log('Transaction successful. Transaction hash:', result.transactionHash);
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  
  }
  



  const recievecid = async ( )=>{
try {
        const cid = await axios.get('http://localhost:5001/getCID');
        return cid;
} catch (error) {
  console.log(error);
}
  }

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result attribute contains the base64 data
        const base64Data = reader.result;
        setBase64Image(base64Data);
        setFormData({
          ...formData,
          'picture': base64Data,
        });
 
      };

      // Convert the image to base64
      reader.readAsDataURL(file);

    }
  };

  const handleChange2 = (base) => {
    // const { name } = e.target;
    setFormData({
      ...formData,
      ['picture']: base,
    });
  };





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    //  setFormData({
    //   ...formData,
    //        ['picture']: base64Image,
    //      });

 send();
      
  };

  const send=async()=>{
    
    if(formData.picture ===""){
    
      setFormData({
        ...formData,
             'picture': base64Image,
           });
    
          }

    try {
      const response = await axios.post('http://localhost:5001/submitForm', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

  
      if (response.status === 200) {
        console.log('Form data sent successfully');
       
       console.log(response.data);
       setrecdataa(response.data.message);

      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }

  }

  return (
    

    <div  className="post">
     
    <Card className='card' >{acc}<div><button onClick={async() => {await connectWallet()}}>Connect Wallet</button>
<button onClick={() => saveString(recdata.toString())}>Save String</button> 

<br></br>
</div></Card> 

{(!recdata) &&     <Card id="cardspanout">
      <Card className='card'>
 <form onSubmit={handleSubmit}>
        <label>
          Name:

          <TextField          
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

        </label>
        <br />

        <label>
          Picture:
        <Input type="file"
         name="picture" 
         onChange={handleFileChange} />
      <br></br>
        </label>
        <br />

        <label style={{'margin-bottom':'30px'}}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
   <Button style={{'margin-left':'100px','margin-bottom':'30px'}} type="submit" variant="contained"><b> Submit
</b></Button>

    
         </form>
         
         </Card>
         </Card>}

<div className='preo'>
        <Card id= "prev">
         <span >
      <span>{formData.name}
      </span>

      <br></br>
      <span>
      <img id='image' src={base64Image} alt="----POST PREVIEW----"/>
      </span>
      <br></br>
      <span>
      {formData.message}
      <br></br>
      {recdata}

      </span>
      </span>
      </Card>
    
      </div>
 
    
    {/* {base64Image && (
        <div>
          <p>Base64 Image:</p>
          <img src={base64Image} alt="Converted to Base64" />
        </div>
      )} */}
      {/* {base64Image} */}
      {/* <img src={base64Image}></img> */}


    </div>
  )
}

export default Post;