import React from 'react'
import Button from '@mui/material/Button';
import { TextField,ButtonGroup, Card } from '@mui/material';
import "./navbar.css";

function navbar() {
  return (
    <div className='nav' >

        <Card children>

            <div style={{backgroundColor: "#fa5c5c", padding:12}}>
            <TextField   color="info" id='search' label="Search" variant="outlined" />

            <ButtonGroup className='btnnav' >
            
            <Button id="mint" >
                MINT
            </Button >
            <Button id="mint">
                PROFILE
            </Button>
            <Button id="mint">
                THE MARKETPLACE
            </Button>
            </ButtonGroup>

            </div>
            </Card>

        
        
        </div>
  )
}

export default navbar
