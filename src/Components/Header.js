import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLocationArrow,
  faSearch,
  faSearchLocation,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db } from "../firebase";
import CartItems from "./CartItems";

const Header = ({ cartItems, user, signOut }) => {
  const getCartQty = () => {
    let totalQty = 0;
    cartItems.map((item) => {
      totalQty += item.product.quantity;
    });
    return totalQty;
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/priyank003/amazon-clone/master/amazon_PNG11.png"
            alt=""
          />
        </Link>
      </HeaderLogo>
      <HeaderOptionAddress>
        <LoactionIcon>
          <FontAwesomeIcon icon={faLocationArrow} />
        </LoactionIcon>
        <HeaderOption>
          <OptionLineOne> Hello</OptionLineOne>
          <OptionLineTwo>Select Your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <HeaderSearchIconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </HeaderSearchIconContainer>
      </HeaderSearch>
      <HeaderNavItems>
        <HeaderOption onClick={signOut}>
          <OptionLinkOne> Hello ,{user.name}</OptionLinkOne>
          <OptionLinkTwo> Account & lists</OptionLinkTwo>
        </HeaderOption>
        <HeaderOption>
          <OptionLinkOne> Returns</OptionLinkOne>
          <OptionLinkTwo> & Orders</OptionLinkTwo>
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />

            <CartAccount>{getCartQty()}</CartAccount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  display: flex;
  padding-left: 9px;
  align-items: center;
`;

const OptionLineOne = styled.div``;

const OptionLineTwo = styled.div`
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  height: 40px;
  border-radius: 5px;
  margin-left: 4px;
  background-color: white;
  :focus-within {
    boxshadow: 0 0 0 10px #f90;
  }
`;
const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  :focus {
    outline: none;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderNavItems = styled.div`
  display: flex;
`;
const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`;
const OptionLinkOne = styled.div``;
const OptionLinkTwo = styled.div``;
const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;
const CartAccount = styled.div`
  padding-left: 4px;
  font-weight: 700;
  color: #f08804;
`;

const LoactionIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
