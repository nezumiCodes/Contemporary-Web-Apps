import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import avatarLarge from '../assets/avatar_large.png';
import avatarSmall from '../assets/avatar_small.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Tile from './Tile';
import Histogram from './Histogram';

function LikeButton(props) {
    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 50px;
        border: 1px solid ${({theme}) => theme.colors.purple};
        border-radius: 40%;
        color: ${({theme}) => theme.colors.purple};
    `;

    return(
        <StyledDiv>
            <FontAwesomeIcon icon={faHeart} /> 12
        </StyledDiv>
    )
}

function CheckinComments(props) {

    const StyledArea = styled.div`
        display: grid;
        align-items: center;
    `;

    const StyledPhotoArea = styled.div`
        display: flex; 
        flex-direction: column;
        align-items: center;
    `;

    const StyledCommentArea = styled.div`
        display: flex; 
        flex-direction: column;
        justify-content: space-around;    
    `;

    const Comment = styled.div`
        width: 90%
        height: 80px;
        border-radius: 5px;
        padding: 5%;
        background-color: ${({theme}) => theme.colors.grey};
    `;

    const StyledLine = styled.hr`
        width: 95%;
        border: 0.6px solid ${({theme}) => theme.colors.grey};
    `;

    const StyledScore = styled.div`
        display: flex;
        flex-direction: column;
        color: ${({theme}) => theme.colors.purple};
    `;

  return (
    <Tile>
        <StyledArea>
            <StyledPhotoArea>
                <img src={avatarLarge} alt="avatar large"/>
                <LikeButton />
            </StyledPhotoArea>
            <StyledCommentArea>
                <h3>
                    Joe Appleton <span style={{color: ({theme}) => theme.colors.purple}}> Checked In </span>
                </h3>
                <h3>
                    2 hours ago
                </h3>
                <h3>
                    Total
                </h3>
            </StyledCommentArea>
            <StyledScore>
                <h2>15</h2>
                <div style={{width: "100%"}}>
                    <Histogram barCount={7} barFill={[10, 20, 30, 40, 50, 40, 50]} />
                </div>
            </StyledScore>
        </StyledArea>

        <StyledArea>
            <img src={avatarSmall} alt="avatar small"/>

            <Comment>
                <h5>Joe Appleton <em>2 hours ago</em> </h5>
                <h5>Well done dude</h5>
            </Comment>
        </StyledArea>

        <StyledArea>
            <img src={avatarSmall} alt="avatar small"/>
            <textarea rows={5}></textarea>
        </StyledArea>
    </Tile>
  )
}

CheckinComments.propTypes = {}

export default CheckinComments;
