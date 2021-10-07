import React from 'react';
import {connect} from "react-redux";
import Controls from "./Controls";

const App = (props) => {
    return (
        <div>
            Version : {props.appVersion}
            <hr/>

            Count : {props.myCount}
           <Controls />
        </div>
    );
};

const mapStateToProps = state => ({
    myCount: state.count,
    appVersion: state.appVersion
});


export default connect(mapStateToProps)(App);
