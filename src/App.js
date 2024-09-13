import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import komponen dokumentasi
import RestDocumentation from './rest-documentation.js';
import GraphQLDocumentation from './graphql-documentation.js';

const App = () => {
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
            <Route path="/rest" element={<RestDocumentation />} />
            <Route path="/graphql" element={<GraphQLDocumentation />} />
            <Route path="/" element={<RestDocumentation />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;