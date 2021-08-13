import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Row className="header align-items-center">
      <Col
        xs={{ span: 10, offset: 1 }}
        md={{ span: 6, offset: 0 }}
        className="d-flex justify-content-center justify-content-md-start"
      >
        <Link to="/" className="logo">
          Blog Post
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
