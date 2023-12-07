
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const call =  require('./app.cjs');




app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());

const PORT = 5001;
let cid;
// const backendData = { message: cid };

app.get("/getCID",async(res,req)=>{
      res.json({ message: cid })
});



app.post('/submitForm', async(req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);
    let json = `{"name":"${formData.name.toString()}",` +`"picture":"${formData.picture.toString()}",`+`"message":"${formData.message.toString()}"}` ; 

    fs.writeFileSync("ipfs.json",json);
     cid =await call();


  
    // Here, you can handle the form data (e.g., write to a file, save to a database, etc.)
  
    res.status(200).json({ message: 'Form data received successfully' });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });