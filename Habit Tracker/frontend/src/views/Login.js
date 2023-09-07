import React from 'react';
import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Tile from '../components/Tile';
import useAuth from '../services/useAuth';

function Login() {

  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  `;

  const StyledTile = styled(Tile)`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  `;

  const { signInUser, signInFacebook, signInGoogle } = useAuth();

  const handleSocialSubmit = async (method) => {
    try {
        if(method === 'facebook') {
            await signInFacebook();
        } else {
            await signInGoogle();
        }
    } catch (err) {
        console.log("Error: " + err);
    }
  };

  const handleEmailSubmit = async (data) => {
      try {
          const {email, password} = data;
          await signInUser(email, password);
      } catch (err) {
          console.log("Error: " + err);
      }
  };

  return (
    <div>
      <StyledWrapper>
        <StyledTile>
          <h2>GET STARTED</h2>
          <h2>JOIN WITH</h2>
          <LoginForm 
            socialSubmit = {handleSocialSubmit}
            emailSubmit = {handleEmailSubmit}
          />
          <Link to='/join'>Not a member? - Join</Link>
        </StyledTile>
      </StyledWrapper>
    </div>
  )
}

export default Login;