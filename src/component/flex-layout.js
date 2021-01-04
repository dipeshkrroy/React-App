import React from "react";
import '../App.css';
import {Navbar, Carousel,Jumbotron,Button,CardDeck,Card,Form,Nav,FormControl }  from 'react-bootstrap';
import bg from '../resource/bg1.jpg';
import bg1 from '../resource/bg2.jpg';
import bg2 from '../resource/bg3.jpg';
import logo from '../logo.svg';
import '../App.css';

function FlexLayout(){
    return(
        <div id="home">
        <Navbar bg="dark" variant="dark" fixed="top" >
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
            </Navbar.Brand>
        </Navbar>
        <Carousel>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src={bg}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                className="d-block w-100"
                src={bg1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bg2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Jumbotron>
            <h1>Our Services!!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
        <div className="container-fluid">
            <h1 className="text-center">Our Team</h1>
            <p>In any industry where the people behind a company are as important as the company itself, you’re likely to find a kind of expanded “about” page that includes information on individual employees. “Meet the Team” pages are popular among web design and other creative firms, but are also found on sites within various other industries.</p>
        <CardDeck>
            <Card>
                <Card.Img className="bg" variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="bg" variant="top" src="data:image/jpeg;base64,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" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img className="bg" variant="top" src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        </div>
        <div className="container-fluid m-1">
            <h1 className="text-center">Contact Us</h1>
            <div className="row">
                <div className="col-md-8">
                    <img src="https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2017/05/16142305/contact-us.png" alt="test" />
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="">
                        <h3 className="text-primary">Send us your message</h3>
                    <Form className="card p-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email address" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        </div>
    );
}

export default FlexLayout;