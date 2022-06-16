import styled from 'styled-components';

export const Conteudo = styled.div`
    font-size: 2em;
    width: 90%;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    margin-left: auto; 
    margin-right: auto;
    @media(max-width: 800px) {
    font-size: 1em;
    position: relative;
    }
  `;