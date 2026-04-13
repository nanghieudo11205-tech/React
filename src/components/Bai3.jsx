import {Row, Col, Card, Button} from 'react-bootstrap';
import {movies} from './Data.js';

function Bai3() { 
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