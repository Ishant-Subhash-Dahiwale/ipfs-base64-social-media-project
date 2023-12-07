import React, { useState } from 'react';
import './post.css';
import axios from 'axios';
import {Button, Card, Input, TextField} from '@mui/material';

function Post(){
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    message: '',
  });


  const [base64Image, setBase64Image] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result attribute contains the base64 data
        const base64Data = reader.result;
        setBase64Image(base64Data);
 
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

     setFormData({
      ...formData,
           ['picture']: base64Image,
         });

 send();
      
  };


  const send=async()=>{
    

    try {
      const response = await axios.post('http://localhost:5001/submitForm', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        console.log('Form data sent successfully');
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }

  }

  return (
    

    <div  className="post">
     <div>
      {/* <span style={{backgroundColor:'lightBlue'}}>
      
      <input type="file" onChange={handleFileChange} />
      <br></br>
      <input type='text' ></input>
      <br></br>
    
      </span> */}
      <Card id="cardspanout">
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

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
   <Button type="submit"><b> Submit
</b></Button>

    
         </form>
         
         </Card>
         </Card>

<div className='preo'>
        <Card id= "prev">
         <span >
      <span>{formData.name}
      </span>

      <br></br>
      <span>
      <img id='image' src={base64Image} alt="image to be posted"/>
      </span>
      <br></br>
      <span>
      {formData.message}
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

    </div>
  )
}

export default Post;