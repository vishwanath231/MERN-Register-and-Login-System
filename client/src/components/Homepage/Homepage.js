import React from 'react';
import styled from  'styled-components';
import { Link }  from 'react-router-dom';

const Homepage = () => {

    const removeUsername = () => {
        localStorage.removeItem('username')
    }

    return (
        <>
            <Container>
                <div className="box">
                    <h1>Hii 👋🏼</h1>
                    <h2>{ localStorage.getItem('username') }</h2>
                    <Link to='/' onClick={removeUsername} className="logout">Logout</Link>
                </div>
            </Container>

        </>
    )
}

export default Homepage;


const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f4f4f4;

    .box {
        padding:1rem 1.5rem;
        border-radius: 10px;
        text-align: center;
        background: #fff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

        h1{
            font-size: 1.5rem;
            font-weight: 500;
        }
        h2{
            font-size: 2rem;
            font-weight: 500;
            margin: .2rem 0 1.5rem 0;
        }

        .logout{
            display: inline-block;
            background: crimson;
            color: #fff;
            padding: 10px;
            border-radius: 3px;
            text-decoration: none;
        }
    }
`;