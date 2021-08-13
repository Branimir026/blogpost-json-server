import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogItemDetails = ({ match }) => {
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts/${match.params.id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data.");
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [match]);

  return (
    <Row>
      <Col>
        {error && <h2 className="error">{error}</h2>}
        {isLoading && <h2>Loading...</h2>}
        <Card className="text-center">
          <Card.Img variant="top" src={blog.image} className="blogPostImage" />
          <Card.Body>
            <Row>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
                <Card.Text className="text-muted">{blog.author}</Card.Text>
              </Col>
              <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
                <Card.Text className="text-muted">13.8.2021</Card.Text>
              </Col>
            </Row>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BlogItemDetails;
