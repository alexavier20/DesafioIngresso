import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCentral = styled.div`
    width: 100%;
    height: 100%;
`;

export const ContainerBanner = styled.div`
    img {
        width: 100%;
        margin-top: -97px;
    }
`;

export const DetailsMovie = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -135px;

    img {
        border-radius: 50%;
        height: 222px;
        width: 222px;
        border: 4px solid #f2f2f2;
        margin-left: 82px;
    }
`;

export const InformationMovie = styled.div`
    margin-left: 24px;

    h1 {
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
        border: 1px solid #f2f2f2;
        background: #ff890d;
        padding: 4px;
        margin: 0 8px 66px 0;
        transform: skew(-10deg);
    }
`;

export const Sinopse = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 32px;
    width: 665px;

    div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        strong {
            color: #3478c1;
            font-size: 16px;
            margin-bottom: 8px;
        }

        span {
            color: #f2f2f2;
        }
    }
`;

export const Cast = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 16px;
    width: 80%;

    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 280px;
        padding: 0 10px 18px 0;

        strong {
            color: #3478c1;
            font-size: 16px;
        }

        span {
            color: #f2f2f2;
        }
    }
`;

export const ContainerTrailer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
`;

export const TrailerList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 16px 0 32px 0;
    width: 820px;

    li {
        display: flex;
        flex-direction: column;
        margin: 16px 0 42px 0;
        width: 100%;

        embed {
            height: 320px;
            width: 100%;
        }

        span {
            color: #ff890d;
            font-weight: bold;
            font-size: 22px;
            margin: 12px;
        }

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #252525;
            padding: 24px;
            border-radius: 4px;
        }
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
