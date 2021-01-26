import React, { ReactElement } from 'react'
import BillingInfo from './BillingInfo';
import ContactInfo from "./ContactInfo";
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';
import {InfoWrapper, Wrapper, ConditionWrapper, Checkbox, ButtonWrapper, ButtonBack, ButtonFront} from './StyleDiv'

interface Props {
    
}


export default function CheckoutPage({}: Props): ReactElement {
    return <Wrapper>

            <h3>Contact information</h3>
        <InfoWrapper>
                <ContactInfo />
            </InfoWrapper>
            
        <h3>Shippiong address</h3>
            <InfoWrapper>
                <ShippingInfo />
            </InfoWrapper>
            
            <h3>Billing address</h3>
            <InfoWrapper>
                <BillingInfo />
            </InfoWrapper>
            
        <h3>Payment methods</h3>
            <InfoWrapper>
                <PaymentInfo />
            </InfoWrapper>
            <ConditionWrapper>
          <Checkbox
            type="checkbox"
            name="agreement"
          />
          <div>
            I agree to the&nbsp;<a href="#"> Terms and Conditions </a>&nbsp;and the&nbsp;<a href="#"> Privacy policy </a>
          </div>
        </ConditionWrapper>

        <ButtonWrapper>
          <ButtonBack type="button">Back</ButtonBack>
          <div>
            <ButtonFront type="submit">Buy Now</ButtonFront>
          </div>
        </ButtonWrapper>

        <ConditionWrapper>
        By clicking the button 'Buy Now',
          I agree to the <a href="#">Terms and Conditions</a> and the <a href="#">Privacy policy</a>
        
        </ConditionWrapper>
    </Wrapper>
    
}
