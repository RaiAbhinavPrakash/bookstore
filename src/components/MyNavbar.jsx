import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useFirebase, firebaseApp } from "../context/Firebase";
import { getAuth, signOut } from "firebase/auth";

const MyNavbar = () => {
  const firebase = useFirebase();
  const firebaseauth = getAuth(firebaseApp);

  return (
    <div>
      {firebase.user !== null && (
        <Navbar style={{backgroundColor:'#7400FF'}}>
          <Container>
            <Navbar.Brand style={{color:'white'}} href="/">BookStore</Navbar.Brand>
            <Nav className="me-auto">
              <Navbar.Brand style={{color:'white'}} href="/home">Home</Navbar.Brand>
              <Navbar.Brand style={{color:'white'}} href="/book/list">Add Listing</Navbar.Brand>
              <Navbar.Brand style={{color:'white'}} href="/book/orders">Orders</Navbar.Brand>
            </Nav>
            <Button
              style={{backgroundColor:'black', marginLeft: "auto", borderRadius: "12px"}}
              onClick={() => signOut(firebaseauth)}
            >
              Logout
            </Button>
          </Container>
        </Navbar>
      )}
      {firebase.user === null && (
        <Navbar style={{backgroundColor:'#7400FF'}}>
          <Container>
            <Navbar.Brand style={{color:'white'}} href="/">BookStore</Navbar.Brand>
            <Nav className="me-auto">
              <Navbar.Brand style={{color:'white'}} href="/login">Login</Navbar.Brand>
              <Navbar.Brand style={{color:'white'}} href="/register">Register</Navbar.Brand>
            </Nav>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default MyNavbar;
