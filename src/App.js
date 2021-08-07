import "./App.css";

import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import AddBlogItem from "./components/AddBlogItem";
import BlogItems from "./components/BlogItems";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={BlogItems} />
          <Route path="/addItem" exact component={AddBlogItem} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
