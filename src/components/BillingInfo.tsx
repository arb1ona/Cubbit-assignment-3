import React, { ReactElement } from 'react'
import styled from "styled-components"

interface Props {
    
}
const FormGroup2 = styled.div`
  padding: 10px 20px
`;

const ColWrapper = styled.div`
margin: 15px 0;
  display: flex;
  place-content: space-between;
  flex-direction: column;

  div {
    margin: 10px 0;
  }
`;

export default function BillingInfo({}: Props): ReactElement {
    return <div>

            <FormGroup2>
            <div>Please provide us with your billing information, so we can send you an invoice after order confirmation.</div>
            <ColWrapper>
              <div>
                <input
                  name="billingRadio"
                  type="radio"
                  value="same"
                  defaultChecked
                /> Use my shipping address
            </div>
              <div>
                <input
                  name="billingRadio"
                  type="radio"
                  value="different"
                /> Use a different address
            </div>
            </ColWrapper>
                </FormGroup2>
        </div>

}
