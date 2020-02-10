import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Container, MovieList, ContainerCentral, Filter } from './styles';
import Header from '../../components/Header';
import pin from '../../assets/images/pin.png';
import api from '../../services/api';

export default function Main() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function loadMovies(){
            //const response = await api.get('/1/partnership/home');
            const response = await api.get('/Movies');
            const data = response.data;
            setMovies(data);
            console.log(data);
        }

        loadMovies();
    }, [])

    return (
        <>
            <Header />
            <Container>
                <ContainerCentral>
                    <Filter>
                        <div>
                            <input type="checkbox" name="2d" value="2D" /><span>2D</span>
                            <input type="checkbox" name="dub" value="DUB" /><span>DUB</span>
                            <input type="checkbox" name="3d" value="3D" /><span>3D</span>
                            <input type="checkbox" name="d-box" value="D-BOX" /><span>D-BOX</span>
                            <input type="checkbox" name="leg" value="LEG" /><span>LEG</span>
                            <input type="checkbox" name="xd" value="XD" /><span>XD</span>
                            <input type="checkbox" name="vip" value="VIP" /><span>VIP</span>
                            <input type="checkbox" name="4d" value="4D" /><span>4D</span>
                            <input type="checkbox" name="cinepolis" value="Cinépic" /><span>Cinépic</span>
                        </div>
                        <div>
                            <img src={pin} alt="pin" />
                            <select id="cars">
                                <option value="1">São Paulo</option>
                                <option value="2">Rio de Janeiro</option>
                            </select>
                        </div>
                    </Filter>
                    <span>Em Cartaz</span>
                    <MovieList>
                        {movies.map(movie => (
                            <li key={movie.id}>
                                <div>
                                    <Link to={`/details/${movie.id}`}>
                                        <img src={movie.images[0].url} alt={movie.title} />
                                        <strong>{movie.title}</strong>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </MovieList>
                </ContainerCentral>
            </Container>
        </>
    );
}
