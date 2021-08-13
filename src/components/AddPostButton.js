import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const AddPostButton = () => {
  return (
    <Row className="addItemButtonContainer">
      <Col xs={{ span: 4, offset: 4 }} md={{ span: 2, offset: 10 }}>
        <Link to="/addItem">
          <Button variant="primary">Add post</Button>
        </Link>
      </Col>
    </Row>
  );
};

export default AddPostButton;
