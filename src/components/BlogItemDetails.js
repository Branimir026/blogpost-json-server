import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

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
          <Card.Body>
            <Card.Title>
              <Link to={`/${blog.id}`}>{blog.title}</Link>
            </Card.Title>
            <Card.Text>{blog.text}</Card.Text>
            <Card.Footer className="text-muted">{blog.author}</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default BlogItemDetails;
