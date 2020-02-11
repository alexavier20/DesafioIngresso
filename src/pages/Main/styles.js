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
        color: #ff890d;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const ContainerError = styled.div`
    margin-top: 18px;

    h2 {
        color: #f2f2f2;
    }

    img {
        margin-top: 18px;
        width: 460px;
    }
`;

export const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 42px;

    div {
        display: flex;
        align-items: center;
    }

    span {
        color: #f2f2f2;
        font-size: 15px;
        padding: 0px 32px 0 8px;
    }

    input {
        height: 16px;
        width: 16px;
    }
`;

export const FilterLeft = styled.ul`
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    width: 600px;

    li {
        display: flex;
        margin-bottom: 8px;
        width: 120px;
    }
`;

export const FilterRight = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 160px;
        border: 1px solid #4c4c4c;
        height: 30px;
        padding: 0 30px 0 12px;
        border-radius: 4px;
        color: #f2f2f2;
        font-size: 12px;
        background: #252525 url('../../assets/images/lupe.png') no-repeat 190px
            center;
    }

    select {
        width: 160px;
        border: 1px solid #4c4c4c;
        height: 30px;
        padding: 0 30px 0 12px;
        border-radius: 4px;
        color: #f2f2f2;
        font-size: 12px;
        background: #252525;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #4c4c4c;
    padding-top: 30px;
    margin-top: 16px;

    div {
        display: flex;
        flex-direction: column;
        width: 178px;
        height: 241px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    li {
        margin: 0 25px 124px 0;

        strong {
            color: #f2f2f2;
            margin-top: 10px;
            text-decoration: none;
        }
    }
`;
