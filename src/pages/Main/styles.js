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
    padding: 16px 24px 24px 24px;
    margin-top: 52px;
`;

export const MovieList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid #4c4c4c;
    padding-top: 25px;
    margin-top: 16px;

    div:hover {
        img {
            -moz-transform: scale(1.1);
	        -webkit-transform: scale(1.1);
	        transform: scale(1.1);
        }
        span{
            -moz-transform: scale(1.1);
	        -webkit-transform: scale(1.1);
	        transform: scale(1.1);
        }
    }

    li {
        margin-bottom: 152px;

        strong {
            color: #f2f2f2;
        }

        a {
            text-decoration: none;
        }
    }
`;

export const Movie = styled.div`
    display: flex;
    flex-direction: column;
    width: 172px;
    height: 182px;
    box-shadow: 0 1px 1px rgba(25, 25, 25, 0.25);
    margin: 0 11px 0 11px;

    img {
        width: 100%;
        height: 100%;
        margin-bottom: 16px;
        transition: background 0.3s;
        box-shadow: 3px 3px 5px #000000;

        max-width: 100%;
	    -moz-transition: all 0.5s;
	    -webkit-transition: all 0.5s;
	    transition: all 0.3s;

        &:first-child {
            height: 273px;
        }
    }
`;

export const Tags = styled.div`
    margin: 10px 0 22px 8px;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index:2;



    span {

        font-weight: bold;
        font-size: 13px;
        background: #ff890d;
        padding: 2px;
        color: #000;
        width: 76px;
        text-align: center;
        margin-bottom: 8px;

    }
`;

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;
