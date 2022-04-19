const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname));
app.use(express.static('public'));
app.use(express.static('files'));


const bodyparser = require('body-parser');
const fs = require('fs');
const jsonParser= express.json()
app.use(bodyparser.urlencoded({extended:true}));
app.post("/",(req, res) => {


  let userReg = {name: req.body.uname, email: req.body.email, psw: req.body.psw};
  res.send(userReg)



  try{
    const arr = require('./5% json.json');
    arr.push(userReg);
    fs.writeFile('./5% json.json',JSON.stringify(arr,null,2),err=>{
        if(err){
            console.log(err);
        }
        else{
            
        }
    })
}
catch (err){
    console.log(err)
    return
}



 
}) 






app.get('/', (req, res) => {
  res.sendfile('index.html')
})
app.get('/styles_of_swimming', (req, res) => {
  res.sendfile(__dirname + '/styles/styles.html')
})
app.get('/muscle', (req, res) => {
  res.sendfile('musclest.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


