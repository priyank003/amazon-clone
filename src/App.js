import { useEffect, useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import React from "react";
import Login from "./Components/Login";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db, auth } from "./firebase";
function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      let tempItems = [];
      tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log("user", user);
  console.log("hitesh is here")
  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <Container>
          <Header signOut={signOut} user={user} cartItems={cartItems} />

          <Switch>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;
const Container = styled.div`
  background-color: #eaeded;
`;
