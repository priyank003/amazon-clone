import styled from "styled-components";
import Product from "./Product";
import React from "react";
import { db } from "../firebase";
import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  let id;
  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];

      tempProducts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          product: doc.data(),
        };
      });
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Banner></Banner>

      <Content>
        {products.map((data) => {
          return (
            <Product
              id={data.id}
              image={data.product.image}
              title={data.product.name}
              price={data.product.price}
              rating={data.product.rating}
            />
          );
        })}
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Banner = styled.div`
  background-image: url("https://imgur.com/SYHeuYM.jpg");
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;

const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;

  display: flex;
`;
