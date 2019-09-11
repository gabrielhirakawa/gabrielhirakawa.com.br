import styled from 'styled-components';

export const SideEffect = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #336699;

  -webkit-animation-name: animacao;
  -moz-animation-name: animacao;
  -o-animation-name: animacao;
  animation-name: animacao;

  -webkit-animation-duration: 0.5s;
  -moz-animation-duration: 0.5s;
  -o-animation-duration: 0.5s;
  animation-duration: 0.5s;


  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  

  @-webkit-keyframes animacao{ from {width: 33%} to {width: 66%} }
  @-moz-keyframes animacao{ from {width: 33%} to {width: 66%} }
  @-o-keyframes animacao{ from {width: 33%} to {width: 66%} }
  @keyframes animacao{ from {width: 33%} to {width: 66%} }

 

`;

