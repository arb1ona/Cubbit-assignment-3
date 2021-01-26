import React, { ReactElement } from 'react'
import {FormGroup, Label, Input, RowWrapper} from './StyleDiv'

interface Props {
}

export default function ContactInfo({}: Props): ReactElement {
    return <div>
        <FormGroup>
            <Label htmlFor="email">Email *</Label>
            <Input name="email" type="text"/>
        </FormGroup> 
        
        <FormGroup>
            <Label htmlFor="phone">Phone number *</Label>
            <Input name="phone" type="text"/>
        </FormGroup>
    <RowWrapper>        
        <FormGroup>
                <Label htmlFor="name">First name *</Label>
                <Input name="name" type="text"/>
        </FormGroup>
            
        <FormGroup>
                <Label htmlFor="lastname">Last name *</Label>
                <Input name="lastname" type="text"/>
        </FormGroup>
    </RowWrapper>
          </div >
    
}
