import styled from 'styled-components';

export const Pilha = styled.ul`
  list-style: none;
  margin-top: 30px;
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