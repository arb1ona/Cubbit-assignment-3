import React from 'react';
import styled from 'styled-components';
import cubbitImage from '../assets/cubbit.png';
import tick from '../assets/tick.svg';

const OrderInfoWrapper = styled.div`
  h3 { font-weight: 800 }

  @media (min-width: 1170px) {
    margin: 0 50px;
    width: 350px;
  }
`;

const CartWrapper = styled.div`
  border: 1px solid #FFFFFF;
  background: #FFFFFF;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
`;

const Title = styled.div` 
    font-weight: 800;
    color: #009EFF;
    `;
const CountButton = styled.button`
  background: #F7F7F7;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const CountInput = styled.input`
  width: 30px;
  color: #161616;
  text-align: center;
  font-size: 1rem;
  line-height: 1.5rem;
  background: #FFFFFF;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  border-radius: 5px;
`;
const CartItem = styled.img`
  margin: 30px 0;
  width: 100px;
`;

const Price = styled.div`
  margin: 10px 20px;
  display: flex;
  place-content: flex-start space-between;
  align-items: flex-start;
}
`;
const PriceLine = styled.div`
  border-top: 1px solid #B6B6B6;
  margin: 0 20px;
`;
const PriceTotal = styled.div`
  margin: 10px 20px;
  display: flex;
  place-content: flex-start space-between;
  align-items: flex-start;

  div {
    font-weight: 800;
    color: #000000;
  }
}
`;

const Info = styled.div`
  margin: 20px;
  color: #B0B0B0;
`;
const InfoTick = styled.img`
  margin-top: 20px
`;

export default function OrderInfo() {
  const cubbit_cell_price = 589;
  const cubbit_shipping = 0;
  const cubbit_discount = 44;

  const [cubbit_count, setcubbitCount] = React.useState(1);
  const [cubbit_price, setcubbitPrice] = React.useState(cubbit_cell_price * cubbit_count);

  const handlecubbitAdd = () => { // counting +
    const count = cubbit_count + 1;
    setcubbitCount(count)
    setcubbitPrice(cubbit_cell_price * count)
  }

  const handlecubbitSub = () => { // counting -
    const count = cubbit_count - 1;
    setcubbitCount(count)
    setcubbitPrice(cubbit_cell_price * count)
  }

  return <OrderInfoWrapper>
    <h3>Order Summary</h3>

    {/* Cubbit OrderInfo */}
    <CartWrapper>
      <Price>
        <Title>Cubbit Cell</Title>
            <div>
              <CountButton onClick={handlecubbitSub}> - </CountButton>
              <CountInput value={cubbit_count} disabled />
              <CountButton onClick={handlecubbitAdd}> + </CountButton>
            </div>
      </Price>
          
      <CartItem src={cubbitImage} />
          
      <Price>
        <div>Cubbit cubbit 1TB up to 4TB</div>
        <div> € {cubbit_price}</div>
      </Price>

      <Price>
        <div>Shipping</div>
        <div> € {cubbit_shipping}</div>
      </Price>

      <Price>
        <div>Discount 44%</div>
        <div> - € {(cubbit_discount * cubbit_price) / 100}</div>
      </Price>

      <PriceLine />

      <PriceTotal>
        <div>Total</div>
        <div> € {cubbit_price - (cubbit_discount * cubbit_price) / 100}</div>
      </PriceTotal>

    </CartWrapper>

    {/* Information Details*/}
    <Info>
      <div>
        <InfoTick src={tick} /> You will receive your cubbit within 1 month in EU and US, and within 2-3 months in all other countries
      </div>
      <div>
        <InfoTick src={tick} /> Guaranteed delivery or money back
      </div>
      <div>
        <InfoTick src={tick} /> 2 year warranty
      </div>
    </Info>

  </OrderInfoWrapper>
}
