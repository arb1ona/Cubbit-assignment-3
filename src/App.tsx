import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CheckoutPage from './components/CheckoutPage';

const Container = styled.div`
  font-family: 'Nunito', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
`;

export default function App() {
  return <Container>

    <CheckoutPage/>
   
  </Container>
}
