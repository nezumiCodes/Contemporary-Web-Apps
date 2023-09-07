import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import Label from '../components/Label';
import Button from '../components/Button';
import drinkIcon from '../assets/drink-icon.svg';
import foodIcon from '../assets/food-icon.svg';
import useAuth from "../services/useAuth";
import useCheckins from '../services/useCheckins';
import CheckinForm from '../components/CheckinForm';

function CheckIn() {
  const StyledTile = styled(Tile)`
    display: grid;
    justify-content: center;
    width: 100%;
    grid-template-column: repeat(1, 1fr);
  `;

  const StyledHeading = styled.h3`
    text-align: center;
    margin-top: 5%;
    color: ${({theme}) => theme.color.purple};
  `;

  const { user } = useAuth();
  const { createCheckin } = useCheckins();

  const handleSubmit = async (checkin) => {
    const ckin = {
      ...checkin,
      ...{
        photo: user.photoURL,
        userName: user.displayName || user.email,
        userId: user.uid,
        time: new Date()
      }
    }

    try {
      await createCheckin(ckin);
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <StyledTile>
      <StyledHeading>Log your Progress for May 18th</StyledHeading>
      <CheckinForm onSubmit={handleSubmit} />
    </StyledTile>
  )
}

export default CheckIn;