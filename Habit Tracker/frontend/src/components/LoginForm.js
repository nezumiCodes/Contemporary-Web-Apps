import React from 'react';
import styled from 'styled-components';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import Button from './Button';
import Input from './Input';
import Label from './Label';

function LoginForm() {

    const StyledIconArea = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        img {
            width: 70px;
            height: 50px;
        }
    `;

    const StyledHeading = styled.h2`
        text-align: center;
        color: ${([theme]) => theme.color.purple};
    `;

  return (
    <div>
        <StyledHeading> JOIN WITH </StyledHeading>
        <StyledIconArea>
            <img src={facebook} alt="fb login" />
            <img src={google} alt="google login" />
        </StyledIconArea>
        <StyledHeading> OR </StyledHeading>

        <Button text="Email"/>

        <form>
            <p><Label>  Email  </Label></p>
            <p><Input type={'email'}/></p>
            <p><Label>  Password  </Label></p>
            <p><Input type={'password'}/></p>

            <Button text="Login" />
        </form>
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm;

