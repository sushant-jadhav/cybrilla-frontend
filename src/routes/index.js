// basic react component starting template
import React, { Component } from 'react';
import {
    Switch,
    Route, Redirect
} from "react-router-dom";

import HomeScreenContainer from "../redux/state/Home/containers/HomeScreenContainer";

class Routes extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        // console.log('componentDidMount isLoginUser',store.getState());
    }

    render() {
        // let {subdomain} = this.props;

        return (
            <>
                {
                    // subdomain === 'table' &&
                    <Switch>

                        {/* <PrivateRoute authed={true} path='/dashboard' component={(props) => {
                            return <DashboardScreenContainer {...props}/>
                        }} exact={true}/>

                        <AuthRoute exact path={'/login'} render={(props) => {
                            return <LoginContainer  {...props}/>
                        }}/>

                        <PrivateRoute authed={true} path='/table' component={(props) => {
                            return <TableScreenContainer {...props}/>
                        }} exact={true}/>

                        <PrivateRoute authed={true} path='/staff-login' component={(props) => {
                            return <StaffLoginScreenContainer {...props}/>
                        }} exact={true}/>

                        <PrivateRoute authed={true} path='/order/payment/:payment_request_id' component={(props) => {
                            return <PaymentModeScreenContainer {...props} payment_request_id={props.match.params.payment_request_id}/>
                        }} exact={true}/> */}

                        <Route exact path={'/'} render={(props) => {
                            return <HomeScreenContainer {...props}/>
                        }}/>

                        {/*<HomePageComponent/>*/}
                    </Switch>
                }
            </>
        );
    }
}

export default Routes;
