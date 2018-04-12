import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Main from './Main';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Menu />
        <Main />
      </AppContainer>
    );
  }
}
