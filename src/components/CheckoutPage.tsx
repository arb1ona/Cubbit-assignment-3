import React, { ReactElement } from 'react'
import BillingInfo from './BillingInfo';
import ContactInfo from "./ContactInfo";
import PaymentInfo from './PaymentInfo';
import ShippingInfo from './ShippingInfo';


interface Props {
    
}

export default function CheckoutPage({}: Props): ReactElement {
    return (
        <>
            <ContactInfo />
            <ShippingInfo />
            <BillingInfo />
            <PaymentInfo/>
        </>
    )
}
