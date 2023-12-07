const { Web3Storage ,getFilesFromPath} = require( 'web3.storage');
const fs = require('fs');

// function to encode file data to base64 encoded string
// function base64_encode(file) {
//     // read binary data
//     var bitmap = fs.readFileSync(file);
//     // convert binary data to base64 encoded string
//     return new Buffer.from(bitmap).toString('base64');
// }






// import { log } from 'console'
let ss;
async function main () {
//   const args = minimist(process.argv.slice(2))
//   const token = args.token

//   if (!token) {
//     return console.error('A token is needed. You can create one on https://web3.storage')
//   }

//   if (args._.length < 1) {
//     return console.error('Please supply the path to a file or directory')
//   }
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyYTcyYWM3ZTEzQzU2OGMyYTQ2QzM5NTJhM0VjNUFkNkY1MUU1N0UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTk2NzgzOTk5ODAsIm5hbWUiOiJmaXJzdCJ9.aZDcRrIesie3sDqQOLRj-NQTHPcpcfB-aSgGgIsurnY';
  const storage = new Web3Storage({ token })
//   const files = []
const name = './ipfs.json';
  const pathFiles = await getFilesFromPath(name)

//   for (const path of args._) {
//     const pathFiles = await getFilesFromPath(path)
//     files.push(...pathFiles)
//   }
// const files = './hello'
  console.log(`Uploading  files`)
  const cid = await storage.put(pathFiles)
  console.log('Content added with CID:', cid)
  console.log(`${cid}.ipfs.w3s.link/${name}`);

  ss=cid+".ipfs.w3s.link/"+name;
  fs.writeFileSync("./cid.txt",ss);
}

let call = ()=>{
  main();
  return ss;
}

// call();

module.exports = call;

