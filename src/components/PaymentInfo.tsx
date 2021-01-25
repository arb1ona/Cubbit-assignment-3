import React, { ReactElement } from 'react'
import styled from "styled-components"
interface Props {
    
}
const PaymentHeader = styled.div`
  background: #F4F4F4;
  padding: 20px;
  display: flex;
  place-content: space-between;
`;

const FormGroup = styled.div`
  display: block;
  width: auto;
  margin: 15px 50px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9rem;
  line-height: 19px;
  display: flex;
  align-items: flex-start;
  color: #363636;
`;

const Input = styled.input`
  display: block;
  margin-top: 10px;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  outline: none;
`;


 const RowWrapper = styled.div`
  display: flex;
  place-content: space-between;
`;

export default function PaymentInfo({}: Props): ReactElement {
    return <div>
            <PaymentHeader>
            <div>Pay with credit card</div>
          </PaymentHeader>

          <FormGroup>
            <Label htmlFor="card_holder">Card holder *</Label>
            <Input
              name="card_holder"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="card_number">Credit / Debit card number</Label>
            <Input
              name="card_number"
              type="text"             
            />
          </FormGroup>

          <RowWrapper>
            <FormGroup>
              <Label htmlFor="card_expiration">Expiration date *</Label>
              <Input
                name="card_expiration"
                type="text"
                placeholder="MM/YY"
                
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="card_cvv">CVV *</Label>
              <Input
                name="card_cvv"
                type="text"               
              />
            </FormGroup>
          </RowWrapper>
        </div>
    
}
