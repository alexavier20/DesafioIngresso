import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCentral = styled.div`
    width: 1020px;
    height: 100%;
`;

export const DetailsMovie = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 220px;
        height: 323px;
    }
`;

export const InformationMovie = styled.div`
    margin-left: 24px;

    h2 {
        color: #f2f2f2;
        margin-bottom: 12px;
    }

    p {
        color: #f2f2f2;
    }
`;

export const TagList = styled.ul`
    display: flex;
    margin-bottom: 12px;

    span {
        font-weight: bold;
        background: #ff890d;
        padding: 4px;
        margin-right: 8px;
    }
`;

export const Cast = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 280px;
        padding: 0 16px 18px 0;

        strong {
            color: #f2f2f2;
            font-size: 16px;
        }

        span {
            color: #f2f2f2;
        }
    }
`;

export const TrailerList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
    margin: 66px 0 32px 0;

    li {
        display: flex;
        flex-direction: column;
        margin-top: 16px;

        embed {
            width: 480px;
            height: 320px;
        }

        span {
            color: #f2f2f2;
            font-weight: bold;
            font-size: 22px;
            margin-top: 10px;
        }
    }
`;
