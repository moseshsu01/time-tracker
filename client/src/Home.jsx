import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    axios.get(`http://localhost:8000/entries/${username}`)
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div>
        Home
      </div>
      <Link to='/edit-entry'>
        Login
      </Link>
    </>
  );
}

export default Home;
