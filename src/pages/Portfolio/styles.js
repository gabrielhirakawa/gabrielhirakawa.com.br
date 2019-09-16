import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #336699;
    padding-bottom: 50px;

    h1{
        margin-top: 30px;
        color: #fff;
    }
    
`;

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    a{
        text-decoration: none;
        color: #222;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 10px;
        background-color: #fff;
        border-radius: 4px;
        width: 250px;


        & + div{
            margin-left: 20px;

            @media(max-width: 920px){
                margin-left: 0;
            }
        }

       

        img{
            height: 120px;

        }
        p{
            text-align: center;

            span{
            margin-top: 5px;
            font-weight: bold;
            font-size: 20px;
            }
        }
    }

    @media (max-width: 920px){
        flex-direction: column;
        padding: 10px 5px;
        width: 250px;

        div{
            width: 60vw;
            margin-bottom: 20px;
        } 
    }
`;

export const List = styled.ul`
    list-style: none;
    width: 700px;
    padding: 10px;
    background-color: #fff;
    
    border-radius: 4px;

    h2{
        text-align: center;
    }

    li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;

        & + li{
            border-top: 1px solid #eee;
        }
    }

    @media(max-width: 820px){
        width: 500px;
    }

    @media(max-width: 590px){
        width: 350px;

        li{
            flex-direction: column;
        }
    }

    @media(max-width: 450px){
        width: 280px;
    }

    @media(max-width: 330px){
        width: 200px;
    }
`;



export const Return = styled.div`
    a{
        text-decoration: none;
        color: #fff;
    }
    span{
        color: #fff;
        margin-left: 5px;
    }
`;
