// basic react component starting template
import React, { Component, } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Alert,
    Image, Navbar, Card
} from 'react-bootstrap';
import {appStyle} from "../../assets/style/appStyle";
import defImg from '../../../src/assets/image/defImg.jpg'
import {Link, Prompt} from "react-router-dom";

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isMenuOpened: false,
            isNotificationOpened: false,
        };
    }

    componentDidMount() {
        // console.log('props', this.props);
        // this.props.initHomeScreenComponent();
    }

    componentWillReceiveProps(nextProps) {
        // console.log('EventComponent 123',nextProps);
        if (nextProps.err !== null) {
            if (nextProps.errSeverity === 'EC200') {
                // this.onCancelLogin();
            }
        }
    }

    componentWillUnmount() {
        // document.removeEventListener('scroll', this.trackScrolling);
    }

    render() {

        const { loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return null; // render null when app is not ready
        }

        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={defImg}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Cybrilla Coding Challange
                    </Navbar.Brand>
                </Navbar>
                <Container>

                    <Row>
                        <Col style={{marginTop:10,marginBottom:80}}>
                            {[1,2,3,4,5].map((data,index)=>{
                                return <Card style={{margin:10}} className={'product-card'} key={index}>
                                    <Prompt message={location =>location.pathname.includes("/ProductDetail")?  `Are you sure you want to view the details ?` : true  } />
                                    <Card.Body>
                                        <Card.Title>
                                            {this.props.name}
                                        </Card.Title>
                                        <Card.Text>
                                            Quantity : 10
                                        </Card.Text>
                                        <Card.Title>{100}</Card.Title>
                                        <Link to={{pathname: "/ProductDetail",productName:{name : 'test'}}}>
                                            <Button variant="primary">View Product</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            })}

                        </Col>
                    </Row>

                </Container>

                <div>
                    <div style={appStyle.style} />
                    <div style={appStyle.style}>
                        <div>
                            <Image style={appStyle.home.imageSize} src={defImg} fluid />
                            <h5>Home</h5>
                        </div>
                        <div>
                            <Image style={appStyle.home.imageSize} src={defImg} fluid />
                            <h5>Cart</h5>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeComponent;
