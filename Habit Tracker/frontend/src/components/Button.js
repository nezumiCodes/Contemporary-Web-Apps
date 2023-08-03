import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button(props) {
    const {text, onClick} = props;

    const StyledButton = styled.button`
        width: 90%; 
        height: 45px;
        border-radius: 50%; 
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: linear-gradient(180deg, #BC9CFF, 0%, #8BA4F9, 100%);
        margin-top: 10%;    
    `;

  return (
    <div>
        <StyledButton onClick={onClick}>  {text}  </StyledButton>
    </div>
  )
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button;
