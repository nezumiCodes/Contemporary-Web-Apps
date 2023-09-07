import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Tile from '../components/Tile';
import styled from 'styled-components';
import useAuth from '../services/useAuth';
import LoginForm from '../components/LoginForm';

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
    grid-row-gap: 20px;
    width: 100%;
`;

const StyledHeading = styled.h2`
    text-align: center;
    align-top: 5%;
    color: ${({theme}) => theme.colors.purple};
`;

const StyledLink = styled(Link)`
    text-align: center;
`;

function Join(props) {
    const { createUser, signInFacebook, signInGoogle } = useAuth();

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
            await createUser(email, password);
        } catch (err) {
            console.log("Error: " + err);
        }
    };

    return (
        <StyledWrapper>
            <StyledTile>
                <StyledHeading>Get Started</StyledHeading>
                <StyledHeading>Join With</StyledHeading>
                <LoginForm 
                    socialSubmit={handleSocialSubmit}
                    emailSubmit={handleEmailSubmit}
                />
                <StyledLink to='/login'>Already a Member? - Login</StyledLink>
            </StyledTile>
        </StyledWrapper>
    )
}

Join.propTypes = {};

export default Join;