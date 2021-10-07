import React from 'react';
import {connect} from "react-redux";

const Controls = (props) => {
    return (
        <div>
            <button onClick={props.minus}> Minus </button>
            <button onClick={props.plus}> Plus </button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    minus: () => dispatch({type: "MINUS"}),
    plus: () => dispatch({type: "PLUS"})
})

export default connect(null, mapDispatchToProps)(Controls);