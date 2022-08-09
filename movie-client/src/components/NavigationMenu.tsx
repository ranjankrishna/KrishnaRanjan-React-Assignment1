import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ComingSoon from './movie-list/ComingSoon';
import MoviesListIndia from './movie-list/MoviesListIndia';
import MoviesListInTheatre from './movie-list/MoviesListTheatre';
import TopRatedMovies from './movie-list/TopRatedMovies';
// import '../..components/common/App.css
import '../components/common/App.css';


const NavigationMenu = () => {
  const newLocal = 'rightSide';
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <div>
            {/* <Container> */}
            <Navbar.Brand href="/"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/MoviesListInTheatre"}>Movies in Theatres</Nav.Link>
                <Nav.Link as={Link} to={"/comingSoon"}>Coming Soon</Nav.Link>
                <Nav.Link as={Link} to={"/topRatedIndian"}>Top Rated Indian</Nav.Link>
                <Nav.Link as={Link} to={"/TopRatedMovies"}>Top Rated Movies</Nav.Link>
                <Nav.Link as={Link} to={"/favourites"}>Favourites</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
          </div>
          <div className="rightSide">
            <input type="text"
             placeholder="Search..."
           />
          </div>

        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/MoviesListInTheatre" element={<MoviesListInTheatre/>}></Route>
          <Route path="/comingSoon" element={<ComingSoon />}></Route>
          <Route path="/TopRatedMovies" element={<TopRatedMovies />}></Route>
          <Route path="/topRatedIndian" element={<MoviesListIndia />}></Route>
          <Route path="/favourites" element={<MoviesListIndia />}></Route> 
          <Route path="/" element={<MoviesListInTheatre />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default NavigationMenu;