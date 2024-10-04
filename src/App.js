import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import RestDocumentation from './RestDocumentation';
import GraphQLDocumentation from './GraphQLDocumentation';

const App = () => {
  useEffect(() => {
    // Untuk menangani perubahan path berdasarkan Nginx config
    if (window.location.pathname === "/api-rest") {
      window.history.replaceState(null, null, "/api-rest");
    } else if (window.location.pathname === "/api-graphql") {
      window.history.replaceState(null, null, "/api-graphql");
    }
  }, []);

  return (
    <Router>
      <div className="d-flex">
        <Navbar bg="primary" variant="dark" expand="lg" className="flex-column p-3 sidebar">
          <Navbar.Brand href="#home">API Documentation</Navbar.Brand>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/rest">REST API</Nav.Link>
            <Nav.Link as={Link} to="/graphql">GraphQL API</Nav.Link>
          </Nav>
        </Navbar>

        <Container className="p-3">
          <Routes>
            <Route path="/api-rest" element={<RestDocumentation />} />
            <Route path="/api-graphql" element={<GraphQLDocumentation />} />
            <Route path="/" element={<RestDocumentation />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
