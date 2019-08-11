const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./mydb.js')

app.use(express.json());


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/api/clothes/:id', db.getClotheById )
app.get('/api/clothes', db.getClothes)
app.post('/api/clothes', db.createClothes)
app.put('/clothes/:id', db.updateClothes)
app.delete('/clothes/:id', db.deleteclothe)



//PORT Environment variable

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
