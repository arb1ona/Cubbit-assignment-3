import React, { ReactElement } from 'react'
import {FormGroup2, ColWrapper} from './StyleDiv'

interface Props {    
}

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
