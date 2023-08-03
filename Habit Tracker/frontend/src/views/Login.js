import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Tile from '../components/Tile';

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


  return (
    <div>
      <StyledWrapper>
        <StyledTile>
          <h2>GET STARTED</h2>
          <h2>JOIN WITH</h2>
          <LoginForm />
        </StyledTile>
      </StyledWrapper>
    </div>
  )
}

export default Login