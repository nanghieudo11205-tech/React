import {Row, Col, Card, Button} from 'react-bootstrap';

function Bai3() {
   const movies = [
       {
        "id":1,
      "title": "The Matrix",
      "duration": 136,
      "director": "Wachowski Sisters",
      "rating":8.7    
    },
    {
        "id":2,
      "title": "Inception",
      "duration": 148,
      "director": "Christopher Nolan",
      "rating": 8.8,
    },
    {
        "id":3,
      "title": "The Godfather",
      "duration": 180,
      "director": "Francis Ford Coppola",
      "rating":  8.5
    }
    ]

  return (
    <div>
      <Row>
        <h1 className='d-flex justify-content-center'>MOVIE</h1>
      </Row>
      <Row>
        {
          movies.map((m) => (
            <Col sm={12} md={4} key={m.id} className='mb-3'>
              <Card className='p-3'>
                  <Card.Title>{m.title}</Card.Title>
                  <p><b>Duration:</b>{m.duration}</p>
                  <p><b>Director:</b>{m.director}</p>
                  <p><b>Rating:</b>{m.rating}</p>
                  <Button variant='primary'>View Details</Button>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Bai3