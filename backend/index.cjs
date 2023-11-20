const  http =require( 'http') ;
const call =require('./app.cjs');
const fs = require("fs");
const url = require('url');
const axios = require('axios');
const { log } = require('console');



const file= fs.readFileSync("./first.html","utf8");

const uri = url.parse('http://bafybeihddfpmgibnxvfcymapxpdh4p3ijdtcslnkwauyt4b6wbwlkwxs7y.ipfs.localhost:8080/hello',false);

const    sl = async()=>{
   let h=await call();
   return h;
}


let y;
http.createServer(async (req,res)=>{
// https://ipfs.io/bafybeihddfpmgibnxvfcymapxpdh4p3ijdtcslnkwauyt4b6wbwlkwxs7y

    // var options = {
    //     host: 'api.publicapis.org', 
    //     path:"/entries"     
    // }
    // var request = await http.request(options, function (res) {
    //     var data = '';
    //     res.on('data', function (chunk) {
    //         data += chunk;
    //         // console.log(data);
    //     });
    //     res.on('end', function () {
    //         // console.log(data);
    //         console.log(data.length);
    
    //     });
    // });

    // request.on('error', function (e) {
    //     console.log(e.message);
    // });
    // request.end();
   

    if(req.url === "/first.html"){
// res.write('<input type="file" name="filetoupload"><br>');
// res.end();

 y =await sl();
// let as;
// try {
//     as = await axios.get("https://bafybeiawrpgiqc4n63gz5hpiyykezd27w5r4mv2izohfqqfacjqkbglsfi.ipfs.w3s.link/hello.json");
//     console.log(as.data);
//     // res.write(as.url);

// } catch (error) {
//     log(error)
    
// }   
     // res.write(file.toString());
        // res.write("<script>window.close()</script>");
        // fs.write(`${as}`);
        // res.write(`<a>${as.data[0].name}</a>`);

        res.end();

    }
else{


    // res.write(uri.pathname);
    // log(uri);
    res.write('<h1>hello</h1>')
    // res.write(`<button onClick="call()" >click</button>`)
    res.write('<a target="_blank" href ="./first.html"><input type="button" value="Submit" `></a>    ')

    res.end();
}
}).listen(5000);
