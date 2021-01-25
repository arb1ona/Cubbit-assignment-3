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

const ConditionWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
`;

const Checkbox = styled.input`
display: block;
margin-right: 10px;
outline: none;
`;

const ButtonWrapper = styled.div`
margin-top: 15px;
display: flex;
text-align: right;
place-content: space-between;
`;

const ButtonBack = styled.button`
border: 0;
height: 40px;
color:#009EFF;
background-color: #ffffff;
border: 1px solid #009EFF;
  border-radius: 2px;
  cursor: pointer;
  width:170px;
  line-height: 1;
  box-shadow: 0px 10px 20px rgba(0, 158, 255, 0.1);
  outline: none;`;

  const ButtonFront = styled.button`
border: 0;
background-color: #009EFF;
height: 40px;
color:#ffffff;
  border-radius: 2px;
  cursor: pointer;
  width:170px;
  line-height: 1;
  box-shadow: 0px 10px 20px rgba(0, 158, 255, 0.1);
  outline: none;`

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
