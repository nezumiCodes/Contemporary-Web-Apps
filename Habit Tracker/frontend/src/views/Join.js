import React from 'react';
import {Link} from 'react-router-dom';
import Tile from '../components/Tile';

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

}

Join.propTypes = {};

export default Join;