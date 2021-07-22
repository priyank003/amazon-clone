import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartTotal = ({ cartItems }) => {
  const getCartQty = () => {
    let totalQty = 0;

    cartItems.map((item) => {
      totalQty += item.product.quantity;
    });
    return totalQty;
  };

  const getCartPrice = () => {
    let totalPrice = 0;
    cartItems.map((item) => {
      totalPrice += item.product.price * item.product.quantity;
    });
    return totalPrice;
  };

  return (
    <Container>
      <SubTotal>
        <h2>
          {" "}
          Subtotal ({getCartQty()}items) :{" "}
          <NumberFormat
            value={getCartPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </h2>{" "}
      </SubTotal>
      <CheckOutButton>Proceed to checkout</CheckOutButton>
    </Container>
  );
};

export default CartTotal;

const Container = styled.div`
  flex: 0.3;
  padding: 20px;
  background-color: white;
`;
const SubTotal = styled.div`
  margin-bottom: 16px;
`;
const CheckOutButton = styled.button`
  background-color: #f0c14b;
  width: 100%;
  padding: 4px 8px;

  border: 2px solid #a88734;
  cursor: pointer;
  font-size: 16px;

  :hover {
    background: #ddb347;
  }
`;
