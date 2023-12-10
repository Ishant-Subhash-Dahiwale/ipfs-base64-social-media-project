
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const call =  require('./app.cjs');
const mcall =  require('./meta.cjs');




app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

const PORT = 5001;
let cid;
// const backendData = { message: cid };


app.get("/getCID",async(req,res)=>{
  // setTimeout(()=>{
  // },6000);
  res.json({ message: cid });

});

const middle = async (req,ers,next ) =>{
 cid="";
    const formData = req.body;
    console.log('Received form data:', formData);
    let json = `{"name":"${formData.name.toString()}",` +`"picture":"${formData.picture.toString()}",`+`"message":"${formData.message.toString()}"}` ; 

    fs.writeFileSync("ipfs.json",json);
     cid = call();
     next();
}

let cidm="";

app.post('/Metadata', async(req, res) => {
  cidm="";
    const formData = req.body;
    console.log('Received form data:', formData);
    let json =     JSON.stringify(formData);
    fs.writeFileSync("Metadata.json",json.toString());
     cidm =(await mcall());
    
// Set an interval (e.g., every 5 seconds)
const intervalId = setInterval(async()=>{
  cidm =(await mcall());
}, 1000); 

setTimeout(() => {
  res.status(200).json({ message:cidm });
  clearInterval(intervalId);
}, 10000); 



  });




app.post('/submitForm', async(req, res) => {
  cid="";
    const formData = req.body;
    console.log('Received form data:', formData);
    let json = `{"name":"${formData.name.toString()}",` +`"picture":"${formData.picture.toString()}",`+`"message":"${formData.message.toString()}"}` ; 

    fs.writeFileSync("ipfs.json",json);
     cid =(await call());
    //  fs.writeFileSync("cid.json",cid);
    
// Set an interval (e.g., every 5 seconds)
const intervalId = setInterval(async()=>{
  cid =(await call());
}, 1000); 

setTimeout(() => {
  res.status(200).json({ message:cid });
  clearInterval(intervalId);
}, 10000); 


    //  res.json({ message: cid });

    // while(1){
    //     if(cid!=""){
    //       break;
    //     }
    // }


    //   setInterval(()=>{
    //      res.status(200).json({ message:cid });

    // },1000);
    // Here, you can handle the form data (e.g., write to a file, save to a database, etc.)
    // setTimeout(()=>{
    // },10000);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });