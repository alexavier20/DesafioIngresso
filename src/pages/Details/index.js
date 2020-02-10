import React, { Component } from 'react';

// import { Container } from './styles';
import api from '../../services/api';

export default class Details extends Component {

    state = {
        movies: [],
    }

    async componentDidMount () {
        const { id } = this.props.match.params

        const response = await api.get(`/Movies/${id}`);
        const data = response.data;

        this.setState({ movies: data });
        console.log(data);
    }

    render() {
        return <div />;
    }
}
