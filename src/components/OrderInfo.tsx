import React from 'react';
import cubbitImage from '../assets/cubbit.png';
import tick from '../assets/tick.svg';
import {OrderInfoWrapper, CartWrapper,Title,CountInput,CountButton, CartItem, Price, PriceLine, PriceTotal,Info, InfoTick} from './StyleDiv'

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
        <InfoTick src={tick} /> You will receive your Cubbit Cell within 1 month in EU and US, and within 2-3 months in all other countries
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
