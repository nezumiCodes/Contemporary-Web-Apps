import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup-resolver";
import styled from 'styled-components';
import facebook from '../assets/facebook.png';
import google from '../assets/google.png';
import Button from './Button';
import Input from './Input';
import Label from './Label';
import useAuth from '../services/useAuth';

function LoginForm(props) {

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

    const { socialSubmit, emailSubmit } = props;

    const loginSchema = yup.object({
        email: yup
                .string()
                .email("Please enter a valid email address.")
                .required("Please enter an email address."),
        password: yup
                .string()
                .required("Please enter a password.")
                .min(5, "Password must be at least 5 characters.")
                .max(20, "Password must be at most 20 characters.")
    });

    const { register, handleSubmit, formState: {errors} } 
        = useForm({resolver: yupResolver(loginSchema)});

    const errorBorder = (error) => error && {borderColor: 'red'};


  return (
    <div>
        <StyledHeading> JOIN WITH </StyledHeading>
        <StyledIconArea>
            <img 
                src={facebook} 
                alt="fb login"
                onClick={() => socialSubmit('facebook')} 
            />
            <img 
                src={google}
                alt="google login" 
                onClick={() => socialSubmit('google')} 
            />
        </StyledIconArea>
        <StyledHeading> OR </StyledHeading>

        <Button text="Email"/>

        <form onSubmit={handleSubmit(emailSubmit)}>
            <p><Label>  Email  </Label></p>
            <p>
                <Input 
                    type={'text'}
                    style={errorBorder(errors.email)}
                    {...register('email')}
                />
            </p>
            <p><Label>  Password  </Label></p>
            <p>
                <Input 
                    type={'password'}
                    style={errorBorder(errors.password)}
                    {...register('password')}
                />
            </p>

            <Button text="Login" />
        </form>
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm;

