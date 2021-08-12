import Card from "react-bootstrap/Card";

const BlogItem = ({ blog }) => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.text.slice(0, 250)}...</Card.Text>
        <Card.Footer className="text-muted">{blog.author}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;
