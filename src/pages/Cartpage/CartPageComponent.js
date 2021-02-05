// basic react component starting template
import React, { Component, } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Navbar, Card, Alert
} from 'react-bootstrap';
import {appStyle} from "../../assets/style/appStyle";
// import defImg from '../../../src/assets/image/defImg.jpg'
import CounterInput from 'react-bootstrap-counter';
import FooterComponent from '../FooterComponent/FooterComponent';
import HeaderComponent from "../HeaderComponent/HeaderComponent";

class CartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isMenuOpened: false,
            isNotificationOpened: false,
        };
    }

    componentDidMount() {
        this.props.initCartScreenComponent();
        this.props.getCartProductsData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.err !== null) {
            if (nextProps.errSeverity === 'EC200') {
                // this.onCancelLogin();
            }
        }
    }

    componentWillUnmount() {
    }

    render() {

        const { loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return null; // render null when app is not ready
        }

        return (
            <>
                <HeaderComponent
                    title={'Cart'}
                />

                {/*<Container>*/}

                    <Row>
                        <Col style={{marginTop:10,marginBottom:80}}>
                            {this.props.cartProducts.map((data,index)=>{
                                return <Card style={{margin:10}} className={'product-card'} key={index}>
                                    {/*<Prompt message={location =>location.pathname.includes("/ProductDetail")?  `Are you sure you want to view the details ?` : true  } />*/}
                                    <Card.Body>
                                        <Card.Title>
                                            {data.product && data.product.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {data.product && data.product.description}
                                        </Card.Text>
                                        <Card.Text>Quantity : <b>{data.quantity}</b></Card.Text>
                                        {/*<Link to={{pathname: "/ProductDetail",productName:{name : 'test'}}}>*/}
                                    </Card.Body>

                                </Card>
                            })}

                            {this.props.cartProducts.length===0 && <Alert show={true} variant="success">
                                <Alert.Heading>Your cart is empty!</Alert.Heading>
                                <p>
                                    No Product Found
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button onClick={() => window.location.replace('/')} variant="outline-success">
                                        Add Product
                                    </Button>
                                </div>
                            </Alert>}

                        </Col>
                        <Col>
                            {
                                <Card style={{margin:10}} className={'product-card'} key={0}>
                                    {/*<Prompt message={location =>location.pathname.includes("/ProductDetail")?  `Are you sure you want to view the details ?` : true  } />*/}
                                    <Card.Body>
                                        <Card.Title>
                                            Product Discount Details
                                        </Card.Title>
                                        <Card.Text>
                                            Discount Amount <b>{(this.props.discountData && this.props.discountData.discount_amount) ? this.props.discountData.discount_amount : 0.00 }</b>
                                        </Card.Text>
                                        <Card.Text>
                                            Total Amount : <b>{(this.props.discountData && this.props.discountData.total_amount) ? this.props.discountData.total_amount : 0.00 }</b>
                                        </Card.Text>

                                    </Card.Body>

                                </Card>
                            }
                        </Col>
                    </Row>



                {/*</Container>*/}

                <FooterComponent/>
            </>
        );
    }
}

export default CartComponent;
