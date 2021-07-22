import styled from "styled-components";
import React from "react";
import { db } from "../firebase";

const Product = ({ id, image, title, price, rating }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      console.log(doc);
      if (doc.exists) {
        cartItem.update({
          quantity: doc.data().quantity + 1,
        });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Rating>
        {Array(rating)
          .fill()
          .map((rating) => "⭐")}
      </Rating>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  background-color: white;
  z-index: 100;
  flex: 1;
  padding: 20px;
  margin: 10px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.span`
  font-weight: 500;
`;
const Price = styled.span`
  font-weight: 600;
  margin-top: 3px;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-height: 200px;
  object-fit: contain;
`;

const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-items: center;
`;

const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;
  align-self: center;
  cursor: pointer;
`;
