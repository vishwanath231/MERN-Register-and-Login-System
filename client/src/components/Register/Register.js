import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import useForm from './useForm';
import validate from './validateInfo';


const Register = () => {


    const { handleChange, values, handleSubmit, errors, emailErr} = useForm(validate);

    return (
        <>
            <Navbar />
            <Container>
                <div className="form__box">
                    <div className="title">Register</div>
                    {emailErr && <p>{emailErr}</p>}
                    <form className="form" onSubmit={handleSubmit}>
                        <FormDiv className="form_div">
                            <label htmlFor="username">Username <span>*</span></label>
                            <input 
                                id= "username"
                                type="text" 
                                name="username"
                                value={values.username} 
                                onChange={handleChange}
                                placeholder="Will Smith" 
                            />
                            {errors.username && <p>{errors.username}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="email">Email <span>*</span></label>
                            <input 
                                id= "email"
                                type="text" 
                                name="email"
                                value={values.email} 
                                onChange={handleChange} 
                                placeholder="example@support.com" 
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="password">Password <span>*</span></label>
                            <input 
                                id= "password"
                                type="password" 
                                name="password" 
                                value={values.password} 
                                onChange={handleChange}
                                placeholder="*****" 
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="password2">Confirm Password <span>*</span></label>
                            <input 
                                id= "password2"
                                type="password" 
                                name="password2"
                                value={values.password2} 
                                onChange={handleChange} 
                                placeholder="*****" 
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </FormDiv>
                        <Button type="submit">Sign Up</Button>
                    </form>
                    <p>You have an account <NavLink to="/" className="link">Login here !</NavLink></p>
                </div>
            </Container>  
        </>
    )
}

export default Register;


const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    min-height: calc(100vh - 66px);

    .form__box{
        width: 100%;
        margin: 1.5rem 0;
        padding: 5px;

        .title{
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            font-weight: 500;
        }

        p{
            margin-top: 1rem;

            .link {
                text-decoration: none;
                color: rgb(24, 71, 199);
            }
        }

        form{
            width: 100%;
        }

        @media(min-width:650px){
            width: 450px;
        }
    }
`;

const FormDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    label{
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: .4rem;

        span {
            color: crimson;
        }
    }

    input{
        font-size: 1rem;
        font-weight: 500;
        font-family: "Sen",sans-serif;
        padding: .8rem;
        border-radius: 3px;
        outline: none;
        border: 1px solid #ddd;
    }

    p{
        color: crimson;
        font-weight: 600;
    }
`;

const Button = styled.button `
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Sen',sans-serif;
    padding: .8rem;
    border-radius: 3px;
    outline: none;
    border: none;
    background: #2E7AAC;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
