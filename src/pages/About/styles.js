import styled from 'styled-components';

export const AboutContent = styled.div`
 
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    a{
        text-decoration: none;
        color: #FFF;
        font-weight: bold;
    }

    a:hover{
        color: #333333;
    }

    @media(max-width: 1200px){
        font-size: 16px;
    }
   
`;

export const Texto = styled.div`

    color: #fff;
    display: flex;
    align-items: center;
    width: 540px;

    img {
        height: 48px;
        margin-left: 5px;
    }

    @media(max-width: 1200px){
        width: 400px;

        img {
        height: 30px;
        margin-left: 5px;
    }
    }

`;

export const AboutTitle = styled.h2`
color: #FFF;
    width: 540px;
    border-bottom: 2px solid #c1c1c1;

    @media(max-width: 1200px){
        width: 400px;
    }
    
`;

export const BackLink = styled.div`
    color: #fff;
    margin-top: 15px;
    text-align: center;

    span {
        margin-left: 5px;
    }


`;