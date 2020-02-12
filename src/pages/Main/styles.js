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
    justify-content: flex-end;
    flex: 1;

    margin-bottom: 18px;

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

export const FilterRight = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-left: 16px;

        input {
            width: 160px;
            border: 1px solid #4c4c4c;
            height: 30px;
            padding: 0 30px 0 12px;
            border-radius: 4px;
            color: #f2f2f2;
            font-size: 12px;
            background: #252525;
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
    }
`;

export const BackgroundMovies = styled.div`
    display: flex;
    flex-direction: column;

    background: #252525;
    border-radius: 4px;
    padding: 10px;
`;

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: 1px solid #4c4c4c;
    padding-top: 25px;
    margin-top: 16px;

    div:hover {
        img {
            opacity: 0.5;
        }

        strong {
            color: #ff890d;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        width: 162px;
        height: 182px;
        box-shadow: 0 1px 1px rgba(25, 25, 25, 0.25);

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
        }

        a {
            text-decoration: none;
        }
    }
`;
