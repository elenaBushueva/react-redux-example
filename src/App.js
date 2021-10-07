import React from 'react';
import {connect} from "react-redux";

const App = (props) => {
    return (
        <div>
            Version : {props.appVersion}
            <hr/>

            Count : {props.myCount}
            <button onClick={props.plus}> Plus </button>
            <button onClick={props.minus}> Minus </button>
        </div>
    );
};

const mapStateToProps = state => ({
    myCount: state.count,
    appVersion: state.appVersion
});
const mapDispatchToProps = dispatch => ({
    plus: () => dispatch({type: "PLUS"}),
    minus: () => dispatch({type: 'MINUS'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
