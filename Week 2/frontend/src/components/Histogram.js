import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

export default function Histogram(props) {

    const {barFill, barCount} = props;

    const divStyle = {
        display: "flex",
        justifyContent: "space-around"
    };

    return (
        <div style={divStyle}>
            {barFill.map((b,i) => i <= barCount ? <Bar percentage={b} /> : "")}
        </div>
    )

}

Histogram.propTypes = {
    barFill: PropTypes.array.isRequired, 
    barCount: PropTypes.number.isRequired 
}