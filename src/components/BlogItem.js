import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <Card className="text-center">
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Row>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
            <Card.Text className="text-muted">{blog.author}</Card.Text>
          </Col>
          <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
            <Card.Text className="text-muted">{blog.date}</Card.Text>
          </Col>
        </Row>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.text.slice(0, 250)}...</Card.Text>
        <Link to={`/${blog.id}`}>
          <Button variant="primary">Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
