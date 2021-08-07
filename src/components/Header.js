import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row className="header align-items-center">
      <Col>
        <h1>
          <Link to="/" className="logo">
            Blog Post
          </Link>
        </h1>
      </Col>
      <Col>
        <Link to="/addItem">
          <Button variant="primary">Add post</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
