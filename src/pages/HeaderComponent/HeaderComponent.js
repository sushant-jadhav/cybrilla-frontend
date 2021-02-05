// basic react component starting template
import React, { Component } from 'react';
import { webApp } from '../../../src/assets/style/webApp';
import {Navbar} from "react-bootstrap";
import defImg from "../../assets/image/defImg.jpg";

class HeaderComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isMenuOpened: false,
            isNotificationOpened: false,
            query: '',
            setQuery: '',
            autoCompleteRef: null
        };
    }

    componentDidMount() {
        // this.props.initHeaderScreenComponent();
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillReceiveProps(nextProps) {
        // console.log('EventComponent 123',nextProps);
        if (nextProps.err !== null) {
            if (nextProps.errSeverity === 'EC200') {
                // this.onCancelLogin();
            }
        }
    }

    render() {
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
                        {this.props.title}
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}



export default HeaderComponent;
