import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import CheckoutPage from './components/CheckoutPage';
import OrderInfo from './components/OrderInfo'

const Container = styled.div`
  font-family:Helvetica, sans-serif;
  display: flex;
`;

const PageWrapper = styled.div`
  display: flex;
   margin: 0 150px;
  `;
const OrderWrapper = styled.div`
    background: #F4F4F4;
    `

const CheckoutWrapper = styled.div`
padding:0 30px;    
`


export default function App() {
  return <Container>
    <PageWrapper>

      <CheckoutWrapper>  
          <CheckoutPage />
      </CheckoutWrapper>

      <OrderWrapper>
        <OrderInfo/>
      </OrderWrapper>
      
    </PageWrapper>

   
  </Container>
}
