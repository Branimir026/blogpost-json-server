import "./App.css";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import AddBlogItem from "./components/AddBlogItem";
import BlogItems from "./components/BlogItems";

const App = () => {
  return (
    <Container>
      <Header />
      <AddBlogItem />
      <BlogItems />
    </Container>
  );
};

export default App;
