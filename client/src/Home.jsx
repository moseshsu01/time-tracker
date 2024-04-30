import axios from 'axios';
import { useEffect } from 'react';

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
    <div>
      Home
    </div>
  );
}

export default Home;
