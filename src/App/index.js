import React, {Component} from 'react';
// import '../../App.css';
import {
    withRouter,
} from "react-router-dom";
import Routes from "../routes";

class MainApp extends Component {

    constructor(props){
        super(props);
    }
    componentWillMount() {
        console.log('Table App')
    }

    componentDidMount() {
        // appendScript('/app/assets/vendor/blockui/jquery.blockUI.js');
        // appendScript('/app/assets/js/blockui-data.js');
        // call default function to display redux operation
        // process.env.NODE_ENV = 'production';
        // console.log('pathname',this.props,process.env.NODE_ENV);
        // process.env.NODE_ENV === 'production' &&
        if ( process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
            navigator.serviceWorker.register('worker.js')
                .then((reg) => {
                    console.log('reg',reg.waiting);
                    if (reg.waiting) {
                        // a new version is already waiting to take control
                        this.newWorker = reg.waiting;

                        /*
                          code omitted: displays a snackbar to the user to manually trigger
                          activation of the new SW. This will be done by calling skipWaiting()
                          then reloading the page
                        */
                    }

                    // handler for updates occuring while the app is running, either actively or in the background
                    reg.onupdatefound = () => {
                        this.newWorker = reg.installing;
                        console.log('newWorker',this.newWorker);
                        this.newWorker.onstatechange = () => {
                            console.log(this.newWorker.state);
                            if (this.newWorker.state === 'installed') {
                                if (reg.active) {
                                    // a version of the SW already has control over the app

                                    /*
                                      same code omitted
                                    */
                                } else {
                                    // very first service worker registration, do nothing
                                }
                            }
                        };
                    };
                });
        }
    }

    componentWillReceiveProps() {
    }

    render() {
        return (
            <>
                <Routes {...this.props}/>
            </>

        );
    }
}

export default withRouter(MainApp);
