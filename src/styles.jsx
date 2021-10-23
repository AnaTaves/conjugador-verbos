import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  text-align: center;
  color: #ffff;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(139,11,52,1) 23%, rgba(0,212,255,1) 100%);
}
h1{
  margin-bottom: 50px;
}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
