import React from 'react';
import PropTypes from 'prop-types';

export default function DaysCompleted(props) {
    const {days} = props;
    // const days = props.days;

    return(
        <div>
            <h2>{days} Days Completed</h2>
        </div>
    )
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired
};

DaysCompleted.defaultProps = {
    days: 0
};
