import Styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
	font-family: 'Montserrat', sans-serif;
}`

export const Container = Styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    h1 {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`;

export const Form = Styled.form `
display: flex;
`;

export const DataContainer = Styled.div `
display: flex;
flex-direction: column;
justify-content: start;
font-size: 1.1rem;
margin: 2rem 0;
padding: 3rem 3rem 7rem 3rem;
box-shadow: 0 0 8px 0 #000;
border-radius: 5px 0 0 5px;
height: 20rem;


    h2 {
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1.7rem;
    }
    input {
        display: block;
        margin-bottom: 1.5rem;
        margin-top: .8rem;
        width: 20rem;
        padding: .4em 0;
        border: .1px solid rgba(0, 0, 0 ,0.2);
        border-radius: 5px;
    }
`;

export const RegionalContainer = Styled(DataContainer)`
padding: 4rem 3rem 8rem 3rem;
border-radius: 5px;
box-shadow: none;
background: #0000FF;
color: #FFFFFF;

transform: translateY(-1rem);
    select {
        display: block;
        margin-bottom: 2.5rem;
        margin-top: .8rem;
        width: 20rem;
        padding: .4rem 0;
        border: none;
        border-radius: 5px;
    }
    button {
        background: #FFFFFF;
        font-size: 1.1rem;
        text-align: center;
        margin-top: 3rem;
        padding: .4rem 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: .5s all;
        &:hover {
            background: #0000FF;
            color: #FFFFFF;
            border: 1px solid #FFFFFF;
        }
    }
`;

