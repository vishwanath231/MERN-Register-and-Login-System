import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
    return (
        <>
            <Error>Not Found</Error>   
        </>
    )
}

export default NotFound;

const Error = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 2rem;
    font-weight: 600;
    color: crimson;
`;
