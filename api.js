const db = require('./mydb.js')
const uuidv4 = require('uuid/v4');

const getClothes = (request, response) => {
  db.pool.query('SELECT * FROM clothestable ORDER BY id ASC', (error, results) => {
      response.status(200).json(results.rows)
  })
}

const getClotheById = (request, response) => {
    const id = request.params.id

    db.pool.query('SELECT * FROM clothestable WHERE id = $1', [id],(error, results) => {
        response.status(200).json(results.rows)
    })
}

const createClothes = (request, response) => {
    const {
      id = uuidv4(), 
      type, name, size, 
      price, created_at=new Date().toISOString(), 
      modified_at=new Date().toISOString()} = request.body

    db.pool.query('INSERT INTO \
                  clothestable (id, type, name, size, price, created_at, modified_at) \
                  VALUES ($1, $2, $3, $4, $5, $6, $7)', 
                    [id, type, name, size, price, created_at, modified_at], (error, results) => 
                    {
                      response.status(201).send(`clothes added with ID: ${id} `)
                    })
}

const updateClothes = (request, response) => {
    const id = request.params.id
    const { 
      type, 
      name, 
      size, 
      price,
      modified_at=new Date().toISOString()
    } = request.body

    db.pool.query(
        'UPDATE clothestable SET type = $1, name = $2, size = $3, price = $4, modified_at=$5 WHERE id = $6', 
        [type, name, size, price, modified_at, id],(error, result) => {
          if(error){
            response.status(200).send(`An error occured: ${error}`)
          }else{
            response.status(200).send(`Clothes modified with ID:${id}`)
          }
        }
    )

}


const deleteclothe = (request, response) => {
    const id = request.params.id

    db.pool.query('DELETE FROM clothestable WHERE id = $1', [id], (error, results) => {        
        response.status(200).send(`Clothes deleted with ID: ${id}`)
    })
}


module.exports = {
  getClothes,
  getClotheById,
  createClothes,
  updateClothes,
  deleteclothe
}

require('make-runnable')
