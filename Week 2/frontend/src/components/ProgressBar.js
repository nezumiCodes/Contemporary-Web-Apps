import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar(props) {
    const outerBar = {
        display: "flex", 
        alignItems: "flex-end", // the children of the outerBar (innerBar) will be alinged
                                // at the bottom of the outerBar
        width: "100%",
        height: "10px", 
        borderRadius: "2px", 
        background: "rgba(188, 156, 255, 0.25)"
    }

    // const {percentage} = props;

    const innerBar = {
        height: "100%",
        width: `${props.percentage}%`, 
        borderRadius: "2px",
        opacity: 100, 
        background: "rgba(188, 156, 255, 1)"
    }

    return(
        <div style={outerBar}>
            <div style={innerBar}></div>
        </div>
    );

}

ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired
}