import "./App.css";

import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import BlogItems from "./components/BlogItems";

const App = () => {
  return (
    <Container>
      <Header />
      <BlogItems />
    </Container>
  );
};

export default App;
