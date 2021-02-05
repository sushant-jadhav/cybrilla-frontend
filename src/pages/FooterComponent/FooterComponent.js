// basic react component starting template
import React, { Component } from 'react';
import {appStyle} from "../../assets/style/appStyle";
import {Image} from "react-bootstrap";
import defImg from "../../assets/image/defImg.jpg";
import {Link} from "react-router-dom";

class FooterComponent extends Component {


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
        // console.log('initHeaderScreenComponent ',this.props);
        return (
            <>
                <div>
                    <div style={appStyle.style} />
                    <div style={appStyle.style}>
                        <Link to={'/'} className={'app-link'} style={appStyle.aLink}>
                            <div>
                                <Image style={appStyle.home.imageSize} src={defImg} fluid />
                                <h5 style={appStyle.aLink}>Home</h5>
                            </div>
                        </Link>
                        <Link to={'/cart'} className={'app-link'} >
                            <div>
                                <Image style={appStyle.home.imageSize} src={defImg} fluid />
                                <h5 style={appStyle.aLink}>Cart</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}



export default FooterComponent;
