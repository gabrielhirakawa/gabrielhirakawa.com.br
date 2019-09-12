import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #336699;
    height: 100vh;
    
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