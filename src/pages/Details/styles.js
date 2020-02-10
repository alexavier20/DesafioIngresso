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

export const TrailerList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    list-style: none;
    border-top: 1px solid #fff;
    padding-top: 30px;
    margin-top: 16px;

    li {
        margin-bottom: 24px;
        embed {
            width: 540px;
            height: 320px;
        }
    }
`;

export const DetailsMovie = styled.div``;

export const TagList = styled.ul``;

export const Informations = styled.div``;
