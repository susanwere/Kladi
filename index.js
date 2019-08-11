const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const api = require('./api.js')

app.use(express.json());


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/api/clothes/:id', api.getClotheById )
app.get('/api/clothes', api.getClothes)
app.post('/api/clothes', api.createClothes)
app.put('/api/clothes/:id', api.updateClothes)
app.delete('/api/clothes/:id', api.deleteclothe)



//PORT Environment variable

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
