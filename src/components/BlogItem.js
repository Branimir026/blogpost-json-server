import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <Link to={`/${blog.id}`}>{blog.title}</Link>
        </Card.Title>
        <Card.Text>{blog.text.slice(0, 250)}...</Card.Text>
        <Card.Footer className="text-muted">{blog.author}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
