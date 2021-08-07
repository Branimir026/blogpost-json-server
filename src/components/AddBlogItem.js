import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBlogItem = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="post-title-input">
        <Form.Label>Post title</Form.Label>
        <Form.Control type="text" placeholder="Post title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="post-text-input">
        <Form.Label>Post text</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author-input">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author's name" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddBlogItem;
