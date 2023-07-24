import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';
import Histogram from './Histogram';
import ProgressBar from './ProgressBar';

export default function DaysCompleted(props) {
    const {days, checkins} = props;
    // const days = props.days;

    const divStyle = {
        display: "grid",
        justifyContent: "center",
        gridTemplateColums: ".8fr",
        gridTemplateRows : "80px 80px 20px auto"
    }

    const textStyle = {
        color: "#BC9CFF",
        textAlign: "center"
    }

    return(
        <Tile>
            <div style={divStyle}>
                <h2 style={textStyle}>{days} Days Complete!</h2>

                <Histogram barCount={5} barFill={checkins.map((checkin) => checkin.score*5)} />
                <ProgressBar percentage={50} />
                <h4 style={{color: "#1F204180"}}>
                    <strong>50%</strong> TO GOAL!
                </h4>
            </div>
        </Tile>
    )
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired, 
    checkins: PropTypes.array.isRequired
};

DaysCompleted.defaultProps = {
    days: 0
};
