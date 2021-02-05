// basic react component starting template
import React, { Component, BackHandler } from 'react';
// import { logo, icnCall, icnCart } from '../../../src/assets/assetsHelper/assetsHelper';
import backArrow  from '../../../src/assets/image/backArrow.png';
import { webApp } from '../../../src/assets/style/webApp';
// import { webApp } from '../assets/style/webApp'
// import { } from 'native-base-web'

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

    handleBackButtonClick() {
        this.props.goBackPage()
    }

    render() {
        // console.log('initHeaderScreenComponent ',this.props);
        return (
            <>
                <div style={webApp.headerBack}>
                    {/*{this.props.isBackButton &&*/}
                    {/*    <div style={webApp.headerBackBtn} onPress={() => this.props.handleBackButton()}>*/}
                    {/*        <div style={[{}]}>*/}
                    {/*            <Image source={backArrow} style={webApp.headerBackIcn} />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    <div style={webApp.headerTitle} >
                        <h1 style={webApp.headerTitleText}>{this.props.title}</h1>
                    </div>
                </div>
            </>
        );
    }
}



export default HeaderComponent;
