import styled from 'styled-components';

//background: url('https://i.ibb.co/FJ1nV7w/bg.png') center / 100% no-repeat  #336699;

export const Bg = styled.div`
    width: 100%;
    background: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
`;

export const BotaoGit = styled.a`
    text-decoration: none;
    color: #fff;

    button{
        border: none;
    }

    span{
    margin-right: 5px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;

    
    
    h1{
        color: #fff;
        span{
        color: #66ccff
        }
    }
    iframe{
        width: 560px;
        height: 315px;
        margin-top: 10px;
        border: 4px solid #fff;
        border-radius: 4px;
    }

    p{
        font-size: 20px;
        color: #fff;
        text-align: center;

        span{
        color: #66ccff
        }
    }
   
`;

export const BackLink = styled.div`
    padding-bottom: 30px;


    a{
        text-decoration: none;
        color: #fff;
        span{
        margin-left: 5px;
        }
    }

`;