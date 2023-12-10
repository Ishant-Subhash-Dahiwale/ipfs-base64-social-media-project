import React from 'react'
import Button from '@mui/material/Button';
import { TextField,ButtonGroup, Card } from '@mui/material';
import "./navbar.css";

function Navbar() {
  return (
    <div className='nav' >

        <Card children>
            <div style={{backgroundColor: "#30333c", padding:'12px'}}>
            {/* <img src='./smd.jpg' alt='Social Media Dapp' ></img> */}

            {/* <TextField   color="info" id='search' label="Search" variant="outlined" /> */}

            <ButtonGroup className='btnnav' >
            <Button  href='#' style={{    'background-color':'#fff'}}>
            <div style={{'font-family': 'Arial, sans-serif', 'font-size': '16px','margin-right':'600px'}}>
            Social Media Dapp</div>
            </Button >    

            <Button id="mint" href='/mint' >
                MINT
            </Button >   
             <Button id="post" href='/post' >
                POST
            </Button >
            </ButtonGroup>

            </div>
            </Card>

        
        
        </div>
  )
}

export default Navbar
