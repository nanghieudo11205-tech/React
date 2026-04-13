import {Row, Col, Form, Button, Card} from 'react-bootstrap';
import {books} from './Data.js';
function Bai4() {
    const categories = ['All Categories', 
        ...books.map((b)=>b.category)
    ];
    const authors = ['All Authors',
        ...new Set(books.map((b)=>b.author))
    ];
  return (
    <div>
        <Row>
            <h1 className = "mt-3" style={{ textAlign: 'center' }}>Book list</h1>
        </Row>
        <Row>
            <Col md={3} >
            <Form.Select>
                {
                categories.map((c, index) => (
                    <option key={index} value={c}>
                        {c}
                    </option>
                    ))
                }
            </Form.Select>
            </Col>
            <Col md={3} >
            <Form.Select>
                {
                authors.map((a, index) => (
                    <option key={index} value={a}>
                        {a}
                    </option>
                    ))
                }
            </Form.Select>
            </Col>
            <Col md={6}>
                <Form.Control type='search' placeholder='Enter title to search'/> 
            </Col>
        </Row>
        <Row className='d-flex justify-content-end'>
            <Button className='m-3' style={{width:100}} variant='success'>Borrow</Button>
        </Row>
        <Row>
            {
                books?.map((b) => (
                    <Col md={3} key={b.id} className='mt-4'>
                        <Card className='p-2'>
                            <Card.Img src={b.image} height={150}/>
                                <Card.Title className='ms-2'>{b.title}</Card.Title>
                                <Card.Text>
                                    <p><b>Author: </b>{b.author}</p>
                                    <p><b>Category: </b>{b.category}</p>
                                    <p><b>Rating: </b>{b.rating}</p>
                                    <p><b>Available Copies: </b>{b.availableCopies}</p>
                                    <p><b>Total Copies: </b>{b.totalCopies}</p>
                                </Card.Text>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </div>
  )
}

export default Bai4