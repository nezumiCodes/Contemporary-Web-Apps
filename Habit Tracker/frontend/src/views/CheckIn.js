import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import Label from '../components/Label';

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

  const StyledForm = styled.form`
    display: grid; 
    justify-content: center;
    text-align: left;
  `;

  const StyledLabel = styled(Label)`
    text-align: left;
    margin-top: 5%;
  `;

  const StyledCheckin = styled.p`
    display: flex; 
    justify-content: space-around;
    margin-top: 5%;
    input:checked {
      background-color: ${({theme}) => theme.color.purple};
    }
  `;

  return (
    <StyledTile>
      <StyledHeading>Log your Progress for May 18th</StyledHeading>
      <StyledForm>
        <StyledLabel>Did you exercise for at least 20 mins?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="exercise" /> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="exercise" /> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Did you drink 2 liters of water?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="water" /> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="water" /> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Did you eat 5 portions of veg?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="veg" /> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="veg" /> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Was your diet perfect?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="diet" /> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="diet" /> No 
          </span>{" "}
        </StyledCheckin>
      </StyledForm>
    </StyledTile>
  )
}

export default CheckIn;