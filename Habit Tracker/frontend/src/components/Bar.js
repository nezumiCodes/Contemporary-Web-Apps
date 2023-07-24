import React from 'react';
import PropTypes from 'prop-types';

export default function Bar(props) {
    const outerBar = {
        display: "flex", 
        alignItems: "flex-end", // the children of the outerBar (innerBar) will be alinged
                                // at the bottom of the outerBar
        width: "30px",
        height: "70px", 
        borderRadius: "2px", 
        background: "linear-gradient(180deg, rgba(111, 207, 151, .25), rgba(102, 210, 234, .25))"
    }

    // const {percentage} = props;

    const innerBar = {
        width: "100%",
        height: `${props.percentage}%`, 
        borderRadius: "2px",
        opacity: 100, 
        background: "linear-gradient(180deg, rgba(111, 207, 151, 1), rgba(102, 210, 234, .5))"
    }

    return(
        <div style={outerBar}>
            <div style={innerBar}></div>
        </div>
    );

}

Bar.propTypes = {
    percentage: PropTypes.number.isRequired
}