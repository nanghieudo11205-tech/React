import {Row, Col, Table, Nav} from 'react-bootstrap';

function Bai2() {
  return (
    <div>
        <Row className='mt-3'>
            <Col md={3}>
            <Nav className='flex-column ms-3'>
                <Nav.Link href='#samsung'>SamSung</Nav.Link>
                <Nav.Link href='#iphone'>Iphone</Nav.Link>
                <Nav.Link href='#oppo'>Oppo</Nav.Link>
            </Nav>
            </Col>
            <Col>
            <Table bordered striped hover variant='primary'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ho va ten</th>
                        <th>Gioi tinh</th>
                        <th>Diem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Do Nang Hieu</td>
                        <td>Nam</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Doang Tung Duong</td>
                        <td>Nam</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Do Phu Dat</td>
                        <td>Nam</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </Table>
            </Col>
        </Row>
    </div>
  )
}

export default Bai2