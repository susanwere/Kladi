const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const clothes = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course1'},
    { id: 3, name: 'course1'}
];


app.get('/api/clothes/:id', (req, res) => {
  const course =  clothes.find(c => c.id == parseInt(req.params.id));
  if (!course) return res.status(404).send('the course with the givin id was not found');
  res.send(course);
});

app.get('/api/clothes', (req, res) => {
    res.send(clothes);
  });


app.post('/api/clothes', (req, res) => {
    const { error } = validateCourse(req.body);
      
    if( error ) return res.status(400).send(error.details[0].message);
    

    const course = {
        id: clothes.length + 1,
        name: req.body.name
    };

    clothes.push(course);
    res.send(course);
});

app.put('/api/clothes/:id', (req, res) => {
    
    const course =  clothes.find(c => c.id == parseInt(req.params.id));
    if (!course) res.status(404).send('the course with the givin id was not found');

  
      const { error } = validateCourse(req.body);
      
      if( error ) return res.status(400).send(error.details[0].message);

      course.name = req.body.name;
      res.send(course);

});


app.delete('/api/clothes/:id', (req, res) => {
    const course =  clothes.find(c => c.id == parseInt(req.params.id));
    if( !course ) return res.status(400).send(error.details[0].message);
    
    const index = clothes.indexOf(course);
    clothes.splice(index, 1);

    res.send(course);
});

function validateCourse(course)
{
    const schema = {
          name: Joi.string().min(3).required()
      };

      return Joi.validate(course, schema);
  
}


//PORT Environment variable

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listening on port ${port}...`));