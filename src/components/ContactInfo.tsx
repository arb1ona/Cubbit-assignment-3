import React, { ReactElement } from 'react'
import styled from "styled-components"

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
