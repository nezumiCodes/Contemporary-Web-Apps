import React from 'react';
import PropTypes from 'prop-types';
import DaysCompleted from '../components/DaysCompleted';
import CheckinComments from '../components/CheckinComments';
import useAuth from '../services/useAuth';
import useCheckins from '../services/useCheckins';

function Dash() {
  const { user } = useAuth();
  const [checkins, setCheckins] = useState([]);
  const { getCheckins, createComment } = useCheckins();

  const getCheckinsData = async () => {
    const checkinSnap = await getCheckins();
    const checkins = [];
    if(checkinSnap.size) {
      checkinSnap.forEach((doc) => {
        checkins.push({...doc.data(), ...{id: doc.id}})
      })
      setCheckins(checkins.reverse());
    }
  }

  useEffect(() => {
    getCheckinsData();
  }, []);

  const handleComment = async (id, comment) => {
    try{
      await createComment(id, {
        ...{comment}, 
        ...{
          photo: user.photoURL,
          name: user.displayName || user.email,
          time: new Date()
        }
      })
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <div>
      <DaysCompleted days={7} checkins={checkins}>
        {" "}
      </DaysCompleted>

      {checkins.map((c) => {
        <CheckinComments onClick={handleComment} checkin={c} key={c.id}/>
      })}
    </div>
  )
}

Dash.propTypes =  {
  checkins: PropTypes.array.isRequired
}

export default Dash;