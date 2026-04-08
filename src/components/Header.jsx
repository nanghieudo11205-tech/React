import {Navbar, Nav, Form, Button, NavbarBrand}from 'react-bootstrap';

function Header(){
    return (
        <Navbar className='d-flex' bg='primary' variant='dark'>
            <NavbarBrand href='#home'>
                <img className='m-5' src='logo192.png' width={60} height={60} alt="Logo"/>
            </NavbarBrand>
            <Nav>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#product'>Product</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
            </Nav>
            <Form className='d-flex' style={{marginLeft:600}}>
                <Form.Control type = 'search' placeholder='Search'/>
                <Button variant='outline-light'>Search</Button>
            </Form>
        </Navbar>
    );
}

export default Header;