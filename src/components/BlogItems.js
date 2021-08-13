import { useState, useEffect } from "react";

import BlogItem from "./BlogItem";
import AddPostButton from "./AddPostButton";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogItems = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch(`http://localhost:8000/posts`)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data.");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      <AddPostButton />
      <Row className="blog-items-container">
        {error && <h2 className="error">{error}</h2>}
        {isLoading && <h2>Loading...</h2>}
        {blogs &&
          blogs.map((blog) => {
            return (
              <Col
                key={blog.id}
                xs={{ span: 10, offset: 1 }}
                md={{ span: 4, offset: 0 }}
              >
                <BlogItem blog={blog} />
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default BlogItems;
