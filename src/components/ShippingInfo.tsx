import React, { ReactElement } from 'react'
import {FormGroup, Label, Input, RowWrapper,Select} from './StyleDiv'

interface Props {
    
}

export default function ShippingInfo({}: Props): ReactElement {
    return <>
     <FormGroup>
            <Label htmlFor="address">Street address *</Label>
            <Input name="address" type="text"/>
        </FormGroup> 
        
        <FormGroup>
            <Label htmlFor="optionalAddress">Other Information (optional)</Label>
            <Input name="optionalAddress" type="text"/>
        </FormGroup>
    <RowWrapper>        
        <FormGroup>
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input name="postalCode" type="text"/>
        </FormGroup>
            
        <FormGroup>
                <Label htmlFor="country">Country *</Label>
                <Select
                name="country"
              >
                    <option value="">Select Country</option>
                    <option value="">Albania</option>
                    <option value="">Italy</option>
                    <option value="">Germany</option>
                    <option value="">Sweden</option>

              </Select>
            </FormGroup>
        </RowWrapper> 
        <RowWrapper>        
        <FormGroup>
                <Label htmlFor="city">City *</Label>
                <Input name="city" type="text"/>
        </FormGroup>
            
        <FormGroup>
                <Label htmlFor="state">State *</Label>
                <Input name="state" type="text"/>
        </FormGroup>
    </RowWrapper>     
    
    </>
}
