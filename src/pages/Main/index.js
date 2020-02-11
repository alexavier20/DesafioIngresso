import React, { useState, useEffect } from 'react';

import { MdSearch, MdRoom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
    Container,
    MovieList,
    ContainerCentral,
    ContainerError,
    Filter,
    FilterLeft,
    FilterRight,
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

    function handleSearchChange(e) {
        setSearch(e.target.value);

        const moviesTemp = JSON.parse(localStorage.getItem('movies'));

        if (moviesTemp) {
            const result = moviesTemp.filter(m => {
                return m.event.title
                    .toLowerCase()
                    .includes(search.toLowerCase());
            });

            setMovies(result);

            console.log(search);
        }
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

    return (
        <>
            <Header />
            <Container>
                <ContainerCentral>
                    <Filter>
                        <FilterLeft>
                            <li>
                                <input type="checkbox" name="2d" value="2D" />
                                <span>2D</span>
                            </li>

                            <li>
                                <input type="checkbox" name="dub" value="DUB" />
                                <span>DUB</span>
                            </li>

                            <li>
                                <input type="checkbox" name="3d" value="3D" />
                                <span>3D</span>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    name="d-box"
                                    value="D-BOX"
                                />
                                <span>D-BOX</span>
                            </li>

                            <li>
                                <input type="checkbox" name="leg" value="LEG" />
                                <span>LEG</span>
                            </li>

                            <li>
                                <input type="checkbox" name="xd" value="XD" />
                                <span>XD</span>
                            </li>

                            <li>
                                <input type="checkbox" name="vip" value="VIP" />
                                <span>VIP</span>
                            </li>

                            <li>
                                <input type="checkbox" name="4d" value="4D" />
                                <span>4D</span>
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    name="cinepolis"
                                    value="Cinépic"
                                />
                                <span>Cinépic</span>
                            </li>
                        </FilterLeft>
                        <FilterRight>
                            <div>
                                <MdSearch color="#ff890d" size={24} />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={search}
                                    onChange={e =>
                                        handleSearchChange(e, 'value')
                                    }
                                />
                            </div>
                            <div>
                                <MdRoom color="#ff890d" size={24} />
                                <select
                                    value={location}
                                    onChange={e =>
                                        handleLocationChange(e, 'value')
                                    }
                                >
                                    <option value="1">São Paulo</option>
                                    <option value="2">Rio de Janeiro</option>
                                    <option value="50000">Teste</option>
                                </select>
                            </div>
                        </FilterRight>
                    </Filter>
                    <span>Em Cartaz</span>

                    {movies ? (
                        <MovieList>
                            {movies.map(movie => (
                                <li key={movie.event.id}>
                                    <div>
                                        <Link to={`/details/${movie.event.id}`}>
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

                                            <strong>{movie.event.title}</strong>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </MovieList>
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
