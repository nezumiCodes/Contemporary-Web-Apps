import React from 'react';
import PropTypes from 'prop-types';
import DaysCompleted from '../components/DaysCompleted';

function Dash(props) {

  const {checkins} = props;

  return (
    <div>
      <DaysCompleted days={7} checkins={checkins}>
        {" "}
      </DaysCompleted>
    </div>
  )
}

Dash.propTypes =  {
  checkins: PropTypes.array.isRequired
}

export default Dash;