const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
var pgp = require('pg-promise')(/* options */);
var db = pgp('postgres://username:password@host:port/database');
const clothes = [
    { id: 1, name: 'clothe1'},
    { id: 2, name: 'clothe1'},
    { id: 3, name: 'clothe1'}
];


app.get('/api/clothes/:id', (req, res) => {
  const clothe =  clothes.find(c => c.id == parseInt(req.params.id));
  if (!clothe) return res.status(404).send('the clothe with the givin id was not found');
  res.send(clothe);
});

app.get('/api/clothes', (req, res) => {
    res.send(clothes);
  });


app.post('/api/clothes', (req, res) => {
    const { error } = validateclothe(req.body);
      
    if( error ) return res.status(400).send(error.details[0].message);
    

    const clothe = {
        id: clothes.length + 1,
        name: req.body.name
    };

    clothes.push(clothe);
    res.send(clothe);
});

app.put('/api/clothes/:id', (req, res) => {
    
    const clothe =  clothes.find(c => c.id == parseInt(req.params.id));
    if (!clothe) res.status(404).send('the clothe with the givin id was not found');

  
      const { error } = validateclothe(req.body);
      
      if( error ) return res.status(400).send(error.details[0].message);

      clothe.name = req.body.name;
      res.send(clothe);

});
// the most important asset in this church 

app.delete('/api/clothes/:id', (req, res) => {
    const clothe =  clothes.find(c => c.id == parseInt(req.params.id));
    if( !clothe ) return res.status(400).send(error.details[0].message);
    
    const index = clothes.indexOf(clothe);
    clothes.splice(index, 1);

    res.send(clothe);
});

function validateclothe(clothe)
{
    const schema = {
          name: Joi.string().min(3).required()
      };

      return Joi.validate(clothe, schema);
  
}


//PORT Environment variable

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listening on port ${port}...`));