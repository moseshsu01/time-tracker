import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const usernameEmpty = username.trim() === ''
    const passwordEmpty = password.trim() === '';

    if (usernameEmpty || passwordEmpty) {
        alert('All fields must be filled out');
        return;
    }

    axios.post('http://localhost:8000/user/register', {username, password})
    .then(result => {
      console.log(result);
      navigate('/login');
    })
    .catch(err => {
      if (err.response.status === 409) {
        alert(err.response.data.message);
      }
      console.log(err)
    });
  }

  return (
    <div>
      <h2>Register</h2>
      <form>
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
      </form>
      <button onClick={handleSignup} type="button">
        Register
      </button>
      <p>Already have an account</p>
      <Link to='/login'>
        Login
      </Link>
    </div>
  );
}

export default Signup;
