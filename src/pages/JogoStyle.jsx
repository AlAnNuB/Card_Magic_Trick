import styled from 'styled-components';

export const Pilha = styled.ul`
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
   @media (max-width: 600px) {
      flex-direction: column;
  }
  background: rgba(196, 196, 196, 0.4);
  border-radius: 27px;
  padding: 10px;
  &:hover {
    background: gray;
    cursor: pointer;
    padding: 17px;
  }
  li {
    padding: 5px;
    align-items: center;
    a {
      color: #003459;
      text-decoration: none;
    }

    img {
      width: 75px;
      height: 100px;
    }
  }
  `;

export const Conjunto = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;  
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 600px) {
      flex-direction: column;
    } 
    @media (max-width: 600px) {
      flex-direction: row;
    }  

  img {
      width: 75px;
      height: 100px;
    }

`;
