import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BlogItem from './components/BlogItem';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/posts`)
    .then(res => {
      if(!res.ok) {
        throw Error('Could not fetch the data.')
      }
      return res.json();
    })
    .then(data => {
      setBlogs(data);
      setIsLoading(false);
      setError(null);
    })
    .catch(err => {
      setError(err.message);
      setIsLoading(false);
    })
  }, []);

  return (
    <div className="App">
      <Header />
      {error && <h2>{ error }</h2>}
      {isLoading && <h2>Loading...</h2>}
      {blogs && blogs.map(blog => {
        return (
          <BlogItem blog={blog} key={blog.id} />
        )
      })}
    </div>
  );
}

export default App;
