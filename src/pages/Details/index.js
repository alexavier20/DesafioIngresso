/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';

import {
    Container,
    TrailerList,
    DetailsMovie,
    InformationMovie,
    TagList,
    Cast,
    ContainerCentral,
} from './styles';

export default class Details extends Component {
    state = {
        movies: [],
        idMovie: '',
    };

    async componentDidMount() {
        const response = await api.get(`/1/partnership/home`);
        const { data } = response;

        this.setState({ movies: data });
        this.setState({ idMovie: this.props.match.params.id });
    }

    render() {
        const { movies, idMovie } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <ContainerCentral>
                        {movies
                        .filter(x => x.event.id === idMovie)
                        .map(movie => (
                            <div key={movie.event.id}>
                                <DetailsMovie>
                                        {movie.event.images
                                                .filter(x => x.type === 'PosterPortrait')
                                                .map(image => (
                                                    <img src={image.url} alt={movie.title} />
                                                ))}

                                        <InformationMovie>
                                            <h2>{movie.event.title}</h2>
                                            <TagList>
                                                {movie.event.tags.map(tag =>(
                                                    <span>{tag}</span>
                                                ))}
                                            </TagList>
                                            <p>{movie.event.synopsis}</p>
                                            <Cast>
                                                <div>
                                                    <strong>Nome Original</strong>
                                                    <span>{movie.event.originalTitle}</span>
                                                </div>
                                                <div>
                                                    <strong>Elenco</strong>
                                                    <span>{movie.event.cast}</span>
                                                </div>
                                                <div>
                                                    <strong>Dirigido por</strong>
                                                    <span>{movie.event.director}</span>
                                                </div>
                                                <div>
                                                    <strong>País de Origem</strong>
                                                    <span>{movie.event.countryOrigin}</span>
                                                </div>
                                                <div>
                                                    <strong>Distribuidor</strong>
                                                    <span>{movie.event.distributor}</span>
                                                </div>
                                            </Cast>
                                        </InformationMovie>
                                    </DetailsMovie>

                                {movie.event.trailers && (
                                    <TrailerList>
                                        {movie.event.trailers.map((trailer, index)=> (
                                            <li key={index + 1} >
                                                <embed src={trailer.embeddedUrl} />
                                                <span>Trailer {index + 1}</span>
                                            </li>
                                        ))}
                                    </TrailerList>

                                )}

                            </div>
                        ))}
                    </ContainerCentral>
                </Container>
            </>
        );
    }
}
