import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="/">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
          </Nav>
          <SearchBar />
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
