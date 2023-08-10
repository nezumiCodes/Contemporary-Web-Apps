import React from "react";
import styled from 'styled-components';

export default function Menu() {
    // const {open} = props; // OR: const open = props.open;

    const StyledNav = styled.nav`
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `;

    const StyledLi = styled.li`
        cursor: pointer;
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10%;
        background: ${({theme, active}) => active ? theme.color.darkShade[25] : ""}
    `;

    return(
        <StyledNav>
            <ul>
                <StyledLi active={true}>Dash</StyledLi>
                <StyledLi>Profile</StyledLi>
            </ul>
        </StyledNav>
    );

}