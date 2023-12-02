import React  from 'react'
import {Card} from '@mui/material';
import "./postcard.css"
// let sel=true;


export default function postcard() {
  
  return (<div>

      <div>
      <Card>
        <div >
          <Card id='cardroot'> 
          <div>
            profile pic
          </div>
        
          <div>
            name
          </div>
        
          <div>
            img
          </div>
          <div>
            
            <Card>
              like,share,follow
            </Card>
          </div>
          <div>
            text
          </div>
          <div>
            date
          </div>       
          </Card>
        </div>
      </Card>
      </div>
  </div>  )
}
