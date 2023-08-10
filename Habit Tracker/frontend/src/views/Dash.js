import React from 'react';
import PropTypes from 'prop-types';
import DaysCompleted from '../components/DaysCompleted';
import CheckinComments from '../components/CheckinComments';

function Dash(props) {

  const {checkins} = props;

  return (
    <div>
      <DaysCompleted days={7} checkins={checkins}>
        {" "}
      </DaysCompleted>
      <CheckinComments/>
    </div>
  )
}

Dash.propTypes =  {
  checkins: PropTypes.array.isRequired
}

export default Dash;