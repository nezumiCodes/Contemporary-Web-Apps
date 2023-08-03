import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 44px;
    border: 1px solid ${([theme]) => theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 2%;
`;

// Arrow format
const Input = (props) => {

    const {type, ...rest} = props;

    return (
        <StyledInput type={type} {...rest} />
    )
}

Input.propTypes = {
    type: PropTypes.string
}

Input.defaultPropTypes = {
    type: "text"
}

export default Input;