import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditAlbum from "./components/edit-album.component";
import AlbumsList from "./components/albums-listing.component";
import CreateAlbum from "./components/create-album.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="success" variant="success">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-album"} className="nav-link">
              Album manager
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-album"} className="nav-link">
                  Create Album
                </Link>
                <Link to={"/albums-listing"} className="nav-link">
                  Albums List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateAlbum} />
                <Route path="/create-album" component={CreateAlbum} />
                <Route path="/edit-album/:id" component={EditAlbum} />
                <Route path="/albums-listing" component={AlbumsList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;