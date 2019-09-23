import React, { Component } from 'react';

import api from '../../services/api';

import Container from '../../components/Container';
import { List } from './styles';

export default class Main extends Component {
  state = {
    cars: [],
  };

  componentDidMount(){
    async function name(_context) {
      const response =  await api.get('/cars').then(data => {
        return data;
      });
      _context.setState({cars:response.data})
    }
    name(this)
  }

 

  render() {
    const { cars } = this.state;

    return (
      <Container>
        <h1>Listagem de carros:</h1>
        <List>
          {cars.map((e,i) => {
            return <div key={i}>
              <span>{e.placa}</span>
              <span>{e.modelo}</span>
              <span>{e.marca}</span>
              <span>{e.ano}</span>
            </div>
          })}
        </List>
      </Container>
    );
  }
}