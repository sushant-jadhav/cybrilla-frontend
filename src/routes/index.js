// basic react component starting template
import React, { Component } from 'react';
import {
    Switch,
    Route, Redirect
} from "react-router-dom";

import HomePageComponent from "../pages/Homepage/HomePageComponent";
// import LoginContainer from "../redux/module/LoginScreen/containers/LoginContainer";
// import TableScreenContainer from "../redux/module/TableScreen/containers/TableScreenContainer";
// import TableOrderScreenContainer from "../redux/module/TableOrderScreen/containers/TableOrderScreenContainer";
// import StaffLoginScreenContainer from "../redux/module/StaffLoginScreen/containers/StaffLoginScreenContainer";
// import PaymentModeScreenContainer from "../redux/module/PaymentModeScreen/containers/PaymentModeScreenContainer";
// import PaymentDetailsScreenContainer
//     from "../redux/module/PaymentDetailsScreen/containers/PaymentDetailsScreenContainer";
// import TableAssignScreenContainer from "../redux/module/TableAssignScreen/containers/TableAssignScreenContainer";

// function PrivateRoute ({component: Component, authed, ...rest}) {
//     const state = tableStore.getState();
//     authed = state.tableLogin.isUserLogin;
//     return (
//         <Route
//             {...rest}
//             render={(props) => authed === true
//                 ? <Component {...props} />
//                 : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//         />
//     )
// }

// function AuthRoute ({component: Component, ...rest}) {
//     const state = tableStore.getState();
//     console.log(state);
//     let auth = state.tableLogin.isUserLogin;
//     return (
//         <Route
//             {...rest}
//             render={(props) => auth === true
//                 ? <Redirect to={{pathname: '/table', state: {from: props.location}}} />
//             : <LoginContainer {...props} />}
//         />
//     )
// }

// function VerifyRoute ({component: Component, authed, ...rest}) {
//     const state = tableStore.getState();
//     let auth = state.tableOrder.verifyPassCode;
//     return (
//         <Route
//             {...rest}
//             render={(props) => auth === null
//                 ? <Redirect to={{pathname: '/table', state: {from: props.location}}} />
//                 : <Component {...props} />}
//         />
//     )
// }


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

                        <HomePageComponent/>
                    </Switch>
                }
            </>
        );
    }
}

export default Routes;