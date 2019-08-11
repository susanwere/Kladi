var chai = require('chai');
chaiHttp = require('chai-http');
chai.use(chaiHttp)
var should = chai.should();
let server = require('../index')

describe('/POST clothes', () => {

  it('should post a cloth', (done) => {
    let cloth = {
      "type": "jeans", 
      "name": "denim dress", 
      "size": 30, 
      "price": "KSh 500"
    }
    chai.request(server)
    .post('/api/clothes/')
    .send(cloth).end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      })
  })

})

describe('/GET clothes', () => {

  it('should get all the clothes', (done) => {
    chai.request(server).get('/api/clothes/').end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })

})
