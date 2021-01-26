import styled from "styled-components"

export const InfoWrapper = styled.div`
  border: 2px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  h3 {font-weight: 900 }
  text-align: left;
  width: 560px;
`;
export const ConditionWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
`;

export const Checkbox = styled.input`
display: block;
margin-right: 10px;
outline: none;
`;
export const ButtonWrapper = styled.div`
margin-top: 15px;
display: flex;
text-align: right;
place-content: space-between;
`;
export const ButtonBack = styled.button`
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

export  const ButtonFront = styled.button`
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

export const FormGroup = styled.div`
display: block;
width: auto;
margin: 15px 50px;
`;

export const Label = styled.label`
font-style: normal;
font-weight: normal;
font-size: 0.9rem;
line-height: 19px;
display: flex;
align-items: flex-start;
color: #363636;
`;

export const Input = styled.input`
display: block;
margin-top: 10px;
box-sizing: border-box;
height: 50px;
width: 100%;
border: 1px solid #E0E0E0;
border-radius: 5px;
outline: none;
`;


export const RowWrapper = styled.div`
display: flex;
place-content: space-between;
`;

export const Select = styled.select`
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

export const FormGroup2 = styled.div`
  padding: 10px 20px
`;

export const ColWrapper = styled.div`
margin: 15px 0;
  display: flex;
  place-content: space-between;
  flex-direction: column;

  div {
    margin: 10px 0;
  }
`;

export const PaymentHeader = styled.div`
background: #F4F4F4;
padding: 20px;
display: flex;
place-content: space-between;
`;
