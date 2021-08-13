import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddBlogItem = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postImage, setPostImage] = useState("");

  const postTitleHandler = (e) => {
    e.preventDefault();
    setPostTitle(e.target.value);
  };

  const postTextHandler = (e) => {
    e.preventDefault();
    setPostText(e.target.value);
  };

  const postAuthorHandler = (e) => {
    e.preventDefault();
    setPostAuthor(e.target.value);
  };
  const postImageHandler = (e) => {
    e.preventDefault();
    setPostImage(e.target.value);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: uuidv4(),
        title: postTitle,
        text: postText,
        author: postAuthor,
        image: postImage,
        date: convertTime(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((error) => console.log("Request failed: " + error));

    setPostTitle("");
    setPostText("");
    setPostAuthor("");
    setPostImage("");
  };

  const convertTime = () => {
    const dateObj = new Date();

    let day = dateObj.getUTCDate();
    let month = dateObj.getUTCMonth();
    let year = dateObj.getUTCFullYear();

    let stringDay = day.toString().padStart(2, "0");
    let stringMonth = month.toString().padStart(2, "0");
    let stringYear = year.toString();

    let formattedTime = stringDay + "." + stringMonth + "." + stringYear + ".";

    return formattedTime;
  };

  return (
    <Form onSubmit={handleSubmitPost}>
      <Form.Group className="mb-3" controlId="post-title-input">
        <Form.Label>Post title</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Post title"
          value={postTitle}
          onChange={postTitleHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="post-text-input">
        <Form.Label>Post text</Form.Label>
        <Form.Control
          required
          as="textarea"
          rows={3}
          value={postText}
          onChange={postTextHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author-input">
        <Form.Label>Author</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Author's name"
          value={postAuthor}
          onChange={postAuthorHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="image-input">
        <Form.Label>Image</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="https://example.com/something/abcd.jpg"
          value={postImage}
          onChange={postImageHandler}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddBlogItem;
