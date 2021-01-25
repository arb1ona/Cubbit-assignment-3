import React, { ReactElement } from 'react'
import BillingInfo from './BillingInfo';
import ContactInfo from "./ContactInfo";
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';
import styled from 'styled-components'


interface Props {
    
}

const InfoWrapper = styled.div`
  border: 2px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 5px;
`;
const Wrapper = styled.div`
  h3 {font-weight: 900 }
  text-align: left;
  width: 560px;
`;

export default function CheckoutPage({}: Props): ReactElement {
    return <Wrapper>

            <InfoWrapper>
                <ContactInfo />
            </InfoWrapper>

            <InfoWrapper>
                <ShippingInfo />
            </InfoWrapper>
            
            <InfoWrapper>
                <BillingInfo />
            </InfoWrapper>
            
            <InfoWrapper>
                <PaymentInfo />
            </InfoWrapper>
    
    </Wrapper>
    
}
