import React, {useState} from 'react';
import styled from 'styled-components';
import avatarLarge from '../assets/avatar_large.png';
import Menu from './Menu.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [open, setOpen] = useState(false);

    const StyledMenu = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 90px;
        hr {
            border: 1px solid ${({theme}) => theme.colors.darkShade[100]}, 
            width: 15%, 
            margin: 4px 0 0 4px;
        }
    `;

    const StyledAvatar = styled.div`
        color: ${({theme}) => theme.colors.darkShade[25]},
        display: flex; 
        align-items: center;
    `;

    const StyledMenuWrapper = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        padding-top: 10%;
        width: 360px; 
        height: 100vh;
        background: linear-gradient(180deg, #6FCF9D, 0%, #67D2E8, 100%);
        transform: ${({open}) =>  open ? 'translateX(0)' : 'translateX(-100%)'}
    `;

    const StyledWrapper = styled.div`
        width: 100%; 
        height: 45px; 
        display: flex; 
        justify-content: space-between;
        background: linear-gradient(
            180deg, 
            ${({theme}) => theme.colors.lightPurple} 0%, 
            ${({theme}) => theme.colors.purple} 100%, 
        )
    `;

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);
    }

    return(
        <div>
            <StyledMenuWrapper open={open}>
                <Menu />
            </StyledMenuWrapper>

            <StyledWrapper>
                <StyledMenu onClick={handleClick}>
                    <hr />
                    <hr />
                    <hr />
                </StyledMenu>
                <StyledAvatar>
                    <FontAwesomeIcon icon={faChevronDown} />
                    <h6>John Doe</h6>
                    <img src={avatarLarge} />
                </StyledAvatar>
            </StyledWrapper>
        </div>
    );
}