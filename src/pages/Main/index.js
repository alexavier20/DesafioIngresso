import React, { useState, useEffect } from 'react';

import { MdSearch, MdRoom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
    Container,
    MovieList,
    ContainerCentral,
    ContainerError,
    Filter,
    FilterRight,
    BackgroundMovies,
} from './styles';
import error from '../../assets/images/error.jpeg';
import Header from '../../components/Header';
import api from '../../services/api';

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [location, setLocation] = useState('1');
    const [search, setSearch] = useState('');

    function handleLocationChange(e) {
        setLocation(e.target.value);
    }

    useEffect(() => {
        async function loadMovies() {
            const response = await api.get(`/${location}/partnership/home`);

            const { data } = response;
            setMovies(data);

            localStorage.setItem('movies', JSON.stringify(data));
        }

        loadMovies();
    }, [location]);

    useEffect(() => {
        const moviesTemp = JSON.parse(localStorage.getItem('movies'));

        if (moviesTemp) {
            const result = moviesTemp.filter(m => {
                return m.event.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });

            setMovies(result);
        }
    }, [search]);

    return (
        <>
            <Header />
            <Container>
                <ContainerCentral>
                    <Filter>
                        <FilterRight>
                            <div>
                                <MdSearch color="#ff890d" size={30} />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>
                            <div>
                                <MdRoom color="#ff890d" size={30} />
                                <select
                                    value={location}
                                    onChange={e =>
                                        handleLocationChange(e, 'value')
                                    }
                                >
                                    <option value="1">São Paulo</option>
                                    <option value="2">Rio de Janeiro</option>
                                </select>
                            </div>
                        </FilterRight>
                    </Filter>

                    {movies.length > 0 ? (
                        <BackgroundMovies>
                            <span>Em Cartaz</span>
                            <MovieList>
                                {movies.map(movie => (
                                    <li key={movie.event.id}>
                                        <div>
                                            <Link
                                                to={`/details/${movie.event.id}`}
                                            >
                                                {movie.event.images
                                                    .filter(
                                                        x =>
                                                            x.type ===
                                                            'PosterPortrait'
                                                    )
                                                    .map(image => (
                                                        <img
                                                            src={image.url}
                                                            alt={movie.title}
                                                        />
                                                    ))}

                                                <strong>
                                                    {movie.event.title}
                                                </strong>
                                            </Link>
                                        </div>
                                    </li>
                                ))}
                            </MovieList>
                        </BackgroundMovies>
                    ) : (
                        <ContainerError>
                            <h2>Não encontramos nenhuma sessão :(</h2>
                            <img src={error} alt="alt" />
                        </ContainerError>
                    )}
                </ContainerCentral>
            </Container>
        </>
    );
}
