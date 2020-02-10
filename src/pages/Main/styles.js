import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCentral = styled.div`
    width: 1020px;
    height: 100%;

    span {
        color:#FF890D;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 42px;

    div {
        display: flex;
        align-items: center;

        select {
            padding: 4px;
            border-radius: 4px;
            margin-left: 8px;
        }
    }

    span {
        color: #fff;
        font-size: 16px;
        padding: 0px 32px 0 8px;
    }

    input {
        height: 20px;
        width: 20px;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #fff;
    padding-top: 30px;
    margin-top: 16px;


    div {
        display: flex;
        flex-direction: column;
        width: 178px;
        height: 241px;


        img {
            width: 100%;
            height: 100%
        }
    }

    li {
        margin: 0 25px 124px 0;


        strong {
            color: #fff;
            margin-top: 10px;
        }
    }
`;
