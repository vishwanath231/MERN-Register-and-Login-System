import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import useForm from './useForm';
import validate from './validateInfo';

const Login = () => {

    const { handleChange, values, handleSubmit, errors, isValid} = useForm(validate);

    return (
        <>
            <Navbar />
            <Container>
                <div className="form__box">
                    <div className="title">Login</div>
                    <Valid>{isValid}</Valid>
                    <form className="form" onSubmit={handleSubmit}>
                        <FormDiv className="form_div">
                            <label htmlFor="email">Email <span>*</span> </label>
                            <input 
                                id="email"
                                type="text" 
                                name="email"
                                value={values.email} 
                                onChange={handleChange}
                                placeholder="example@support.com" 
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </FormDiv>
                        <FormDiv className="form_div">
                            <label htmlFor="password">Password <span>*</span> </label>
                            <input 
                                id="password"
                                type="password" 
                                name="password" 
                                value={values.password}
                                onChange={handleChange}
                                placeholder="*****" 
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </FormDiv>
                        <Button type="submit">Log In</Button>
                    </form>
                    <p>You don't have an account <NavLink to="/signup" className="link">SignUp here !</NavLink></p>
                </div>
            </Container>     
        </>
    )
}

export default Login;


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

const Valid =styled.div `
    text-align: center;
    margin: 1rem 0;
    color: crimson;
    font-weight: 600;
`;