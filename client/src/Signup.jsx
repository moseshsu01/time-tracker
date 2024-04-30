import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/user/register', {username, password})
    .then(result => {
      console.log(result);
      navigate('/user/login');
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            placeholder='Enter username'
            autoComplete='off'
            name='username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='text'
            placeholder='Enter password'
            autoComplete='off'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>
          Register
        </button>
      </form>
      <p>Already have an account</p>
      <Link to='/login'>
        Login
      </Link>
    </div>
  );
}

export default Signup;
