import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row className="header align-items-center">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
        <h1>
          <Link to="/" className="logo">
            Blog Post
          </Link>
        </h1>
      </Col>
      <Col
        xs={{ span: 4, offset: 4 }}
        md={{ span: 2, offset: 4 }}
        className="addItemButtonContainer"
      >
        <Link to="/addItem">
          <Button variant="primary">Add post</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
