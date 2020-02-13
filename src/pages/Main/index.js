import React, { useState, useEffect } from 'react';

import { MdSearch, MdRoom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

import {
    Container,
    Content,
    MovieList,
    Movie,
    ContainerCentral,
    ContainerError,
    Filter,
    FilterRight,
    BackgroundMovies,
    Tags,
} from './styles';
import error from '../../assets/images/error.jpeg';
import Header from '../../components/Header';
import api from '../../services/api';

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [location, setLocation] = useState('1');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }
    }, [search]);

    return (
        <Container>
            <Header />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Content>
                        <ContainerCentral>
                            <Filter>
                                <FilterRight>
                                    <div>
                                        <MdSearch color="#ff890d" size={30} />
                                        <input
                                            type="text"
                                            placeholder="Buscar"
                                            value={search}
                                            onChange={e =>
                                                setSearch(e.target.value)
                                            }
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
                                            <option value="2">
                                                Rio de Janeiro
                                            </option>
                                            <option value="55555">
                                                Rieiro
                                            </option>
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
                                                <Movie>
                                                    <Tags>
                                                        {movie.event.tags.map(
                                                            t => (
                                                                <span key={t}>
                                                                    {t}
                                                                </span>
                                                            )
                                                        )}
                                                    </Tags>
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
                                                                <>
                                                                    <img
                                                                        src={
                                                                            image.url
                                                                        }
                                                                        alt={
                                                                            movie.title
                                                                        }
                                                                    />
                                                                </>
                                                            ))}
                                                        <strong>
                                                            {movie.event.title}
                                                        </strong>
                                                    </Link>
                                                </Movie>
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
                    </Content>
                </>
            )}
        </Container>
    );
}
