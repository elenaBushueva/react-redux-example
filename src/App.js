import React from 'react';
import {connect} from "react-redux";
import Controls from "./Controls";

const App = (props) => {
    return (
        <div>
            App Version : {props.appVersion}
            <hr/>

            Counter : {props.myCount}

            <Controls/>
        </div>
    );
};

const mapStateToProps = state => ({
    myCount: state.count,
    appVersion: state.appVersion,
})

export default connect(mapStateToProps)(App);