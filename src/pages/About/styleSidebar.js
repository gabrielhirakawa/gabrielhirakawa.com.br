import styled from 'styled-components';

export const SideEffect = styled.div`
display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #336699;
  -webkit-animation-name: animacao;
  -webkit-animation-duration: 1.5s;
  -webkit-animation-fill-mode: forwards;
  

  @keyframes animacao {
   from {
      width: 33%; 
   }
   to { 
     width: 66%;
   }
}


`;

