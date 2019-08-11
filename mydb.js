const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'clothes',
  password: 'NKky95*#',
  port: 5433,
})



const getClothes = (request, response) => {
    pool.query('SELECT * FROM clothestable ORDER BY id ASC', (error, results) => {
        
        
        response.status(200).json(results.rows)
    })
}

//this method gets a single clothes item in store

const getClotheById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM clothestable WHERE id = $1', [id],(error, results) => {
       
        response.status(200).json(results.rows)
    })
}

const createClothes = (request, response) => {
    const {name, size} = request.body

    pool.query('INSERT INTO clothestable (name, size) VALUES ($1, $2)', [name, size], (error, results) => {
        
        response.status(201).send(`clothes added with ID: ${results.insertId} `)
    })
}

const updateClothes = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, size} = request.body

    pool.query(
        'UPDATE clothestable SET name = $1, email = $2 WHERE id = $3', 
        [name, size, id],(error, result) => {
        
            response.status(200).send(`Clothes modified with ID:${id}`)
        }
    )

}


const deleteclothe = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM clothestable WHERE id = $1', [id], (error, results) => {
       
        response.status(200).send(`Clothes deleted with ID: ${id}`)
    })
}

module.exports = {
    getClothes,
    getClotheById,
    createClothes,
    updateClothes,
    deleteclothe,
  }
