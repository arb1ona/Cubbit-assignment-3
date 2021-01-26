import React, { ReactElement } from 'react'
import {PaymentHeader, FormGroup, Input, Label, RowWrapper} from './StyleDiv'

interface Props {
}

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
