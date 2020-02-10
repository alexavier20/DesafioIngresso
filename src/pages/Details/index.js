/* eslint-disable react/state-in-constructor */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, TrailerList, ContainerCentral } from './styles';

export default class Details extends Component {
    state = {
        movies: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/1/partnership/home`);
        const { data } = response;

        const movie = data.filter(value => {
            return value.event.id === id;
        });

        this.setState({ movies: movie });
    }

    render() {
        const { movies } = this.state;

        return (
            <>
                <Header />
                <Container>
                    <ContainerCentral>
                        <div>
                            <span>Trailers</span>
                            <TrailerList>
                                {movies.event.trailers.map(trailer => (
                                    <li key={trailer.embeddedUrl}>
                                        <embed src={trailer.embeddedUrl} />
                                    </li>
                                ))}
                            </TrailerList>
                        </div>
                    </ContainerCentral>
                </Container>
            </>
        );
    }
}
