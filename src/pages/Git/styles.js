import styled from 'styled-components';

//background: url('https://i.ibb.co/FJ1nV7w/bg.png') center / 100% no-repeat  #336699;

export const Bg = styled.div`
    width: 100%;
    height: 100vh;
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
    
    max-width: 80%;
    h1{
        padding-top: 20px;
        text-align: center;
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

    h4{
        margin: 0;
        padding: 0;
    }

    p{
        font-size: 20px;
        color: #fff;
        text-align: center;

        span{
        color: #66ccff
        }
    }

    @media (max-width: 1380px){
        
        h1{
            padding-top: -200px;
            font-size: 1.7em;
        }
        p{
            font-size: 1.22em;
        }

        iframe{
            height: 236px;
            width: 420px;
        }
    }

    @media (max-width: 720px){
        h1{
            font-size: 1.4em;
        }
        p{
            font-size: 1.22em;
        }

        iframe{
            height: 225px;
            width: 400px;
        }
    }

    @media (max-width: 550px){
        h1{
            font-size: 1.22em;
        }
        p{
            font-size: 1.1em;
        }

        iframe{
            height: 197px;
            width: 350px;
        }

        button{
            font-size: 12px;
            padding: 10px 25px;
        }
    }

    @media(max-width: 390px){
        h1{
            font-size: 1.1em;
        }
        p{
            font-size: 1em;
        }

        button{
            margin-top: 10px;
        }

        iframe{
            height: 158px;
            width: 280px;
        }
    }
   
`;

export const BackLink = styled.div`
    padding-bottom: 20px;
    padding-top: 20px;


    a{
        text-decoration: none;
        color: #fff;
        span{
        margin-left: 5px;
        }
    }

`;