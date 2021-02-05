import { connect } from "react-redux";
import {
    initDashboardScreenComponent,
} from '../modules/dashboardScreen';
import DashboardComponent from "../../../../pages/Dashboard/DashboardComponent";

const mapStateToProp = (state) => ({
    loading             : state.tableDashboard.loading || false,
    err                 : state.tableDashboard.err || false,
    errSeverity         : state.tableDashboard.errSeverity || false
});

const mapActionCreators = {
    initDashboardScreenComponent
};

export default connect(mapStateToProp, mapActionCreators)(DashboardComponent);
