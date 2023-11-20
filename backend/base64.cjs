const { log } = require('console');
var fs = require('fs');
const axios = require('axios')


function base64_decode(base64Image, file) {
    fs.writeFileSync(file,base64Image);
     console.log('******** File created from base64 encoded string ********');
  
  }
  let as="";
const asx = async ()=>{
  as = await axios.get("https://bafybeieige3sn5bdeh3jwoi2osjbkogydbajkqxshxjzcw65467yge2ewy.ipfs.w3s.link/new-path.txt");
  // fs.writeFileSync("new-path.txt", as.data.toString());
  var bb =  Buffer.from(as.data.toString(), "base64");

  fs.writeFileSync("new.jpg", bb);
  // log(as)
}
// asx()



// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return  Buffer.from(bitmap).toString('base64');
}








//   client.on('data', (data) => {
//       base64_decode(data,'copy.jpg')
//   });



// var o = base64_encode("./WhatsApp.jpg");

// var ss =  fs.readFileSync("./WhatsApp.jpg","base64")



// var o= btoa((ss))

// // fs.writeFileSync("./op.jpg",o,"ascii")
// var as = atob(o);

// base64_decode(as,"op.jpg");

