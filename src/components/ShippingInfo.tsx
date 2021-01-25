import React, { ReactElement } from 'react'
import styled from "styled-components"

import CountryList from "../services/CountryList.json"


interface Props {
    
}


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

const Select = styled.select`
    display: block;
    margin-top: 10px;
    padding: 5px 20px;
    height: 40px;
    width: 100%;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 0.9rem;
    outline: none;
  `;

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
