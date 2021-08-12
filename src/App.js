import "./App.css";

import Container from "react-bootstrap/Container";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import AddBlogItem from "./components/AddBlogItem";
import BlogItems from "./components/BlogItems";
import BlogItemDetails from "./components/BlogItemDetails";

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" exact component={BlogItems} />
          <Route path="/addItem" component={AddBlogItem} />
          <Route path="/:id" component={BlogItemDetails} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
