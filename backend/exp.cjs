const express = require('express');
const app = express();
const axios = require('axios');


let actual ;
const aa = async ()=>{
 actual =('bafybeihddfpmgibnxvfcymapxpdh4p3ijdtcslnkwauyt4b6wbwlkwxs7y.ipfs.w3s.link');
}


app.get('/api',  (req,res)=>{
    actual =fetch('https://ipfs.io/ipfs/QmbJrUjAGL75ikNgP5mJDYJ1KPJHU2LDkXNfuiAH1u8FFG?filename=Front.java').then(
        response => response.blob
    ).then(data=>{
        res.send(actual);
    });



})


app.listen(5000,()=>{
    console.log("server has started");
})