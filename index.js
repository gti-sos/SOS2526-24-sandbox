
let express= require('express');
let cool= require("cool-ascii-faces");
//console.log(cool());




const app = express()

app.get('/', (req, res) => {
  res.send(`<html><body><h1>
            ${cool()}
    +<html><body><h1>`);
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})