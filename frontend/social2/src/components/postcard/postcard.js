// Import necessary dependencies
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Web3 from 'web3';
import StringStorageContract from './../../contracts/StringStorage.json'; // Import your contract ABI
import axios from 'axios';


let web3;
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



const contractAddress = '0x35E91591E3e0A57d911ebA57c692023aB66F79a5';
const contract = new web3.eth.Contract(StringStorageContract, contractAddress);






// Sample data
const postData = {
  name: 'John Doe',
  date: 'December 6, 2023',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget...',
  imageUrl: 'https://placekitten.com/600/400', // Replace with your image URL
};

// Component definition
const Postcard = (props) => {
  const [img,setimg] = useState('');
  const [name,setname] = useState('');
  const [message,setmsg] = useState('');
// Example: Call a view function
async function getString() {
  let ii= props.i;

  const result = await contract.methods.getString(ii).call();
  console.log('String at index', ii, ':', result);
  let i = await axios.get(`https://${result}`);
  console.log(i);
  setimg(i.data.picture);
  setname(i.data.name);
  setmsg(i.data.message);
}


             getString();

  return (
    <Card style={{ display: 'flex', justifyContent: 'space-between', padding: '16px','height':'auto' , margin:'30px' }} >
     
      <CardHeader
      style={{'height':'300px','margin-left':'30px'}}
        // avatar={<Avatar aria-label="user">{postData.name[0]}</Avatar>}
        title={name}
        subheader={message}
      />
      
   
      <img src={img} style={{height:'400px','width':'400px'}}></img>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* {props.item} */}
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
        <IconButton aria-label="like">

          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default Postcard;
