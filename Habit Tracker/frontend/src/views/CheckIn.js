import React from 'react';
import styled from 'styled-components';
import Tile from '../components/Tile';
import Label from '../components/Label';
import Button from '../components/Button';
import drinkIcon from '../assets/drink-icon.svg';
import foodIcon from '../assets/food-icon.svg';
import useAuth from "../services/useAuth";
import useCheckins from '../services/useCheckins';

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
    text-transform: uppercase;
  `;

  const StyledCheckin = styled.p`
    display: flex; 
    gap: 20%;
    margin-top: 5%;
    color: rgb(76, 77, 76, 0.8); 
    
    input[type="radio"]:checked {
      color: ${({theme}) => theme.color.grey} !important; 
      background-color: ${({theme}) => theme.color.purple} !important;
    }
  `;

  const StyledFoodDrinksArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    text-transform: uppercase;
  `;

  const StyledIcon = styled.img`
    display: relative;
    position: absolute;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;

  const StyledSelect = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 30%;
    background-color: white;
    color: ${({theme}) => theme.color.darkShade[50]};
    text-indent: 25%;
    font-size: 14px;
    width: 135px;
    height: 45px;
    border: 2px solid ${({theme}) => theme.color.grey};
    border-radius: 3px;
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
      <StyledForm>
        <StyledLabel>Did you exercise for at least 20 mins?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="exercise" value="Yes"/> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="exercise" value="No"/> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Did you drink 2 liters of water?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="water" value="Yes"/> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="water" value="No"/> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Did you eat 5 portions of veg?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="veg" value="Yes"/> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="veg" value="No"/> No 
          </span>{" "}
        </StyledCheckin>

        <StyledLabel>Was your diet perfect?</StyledLabel>
        <StyledCheckin>
          <span>
            <input type="radio" name="diet" value="Yes"/> Yes 
          </span>{" "}
          <span>
            <input type="radio" name="diet" value="No"/> No 
          </span>{" "}
        </StyledCheckin>

        <StyledFoodDrinksArea>
            <StyledLabel>Drinks</StyledLabel>
            <StyledLabel>Food</StyledLabel>
            <div>
              <StyledIcon src={drinkIcon} />
              <StyledSelect>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </StyledSelect>
            </div>
            <div>
              <StyledIcon src={foodIcon} />
              <StyledSelect>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </StyledSelect>
            </div>
        </StyledFoodDrinksArea>

        <Button text="CHECKIN" onClick={handleSubmit} />

      </StyledForm>
    </StyledTile>
  )
}

export default CheckIn;