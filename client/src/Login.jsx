import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usernameEmpty = username.trim() === ''
    const passwordEmpty = password.trim() === '';

    if (usernameEmpty || passwordEmpty) {
        alert('All fields must be filled out');
        return;
    }

    axios.post('http://localhost:8000/user/login', {username, password})
    .then(result => {
      const username = result.data.username;
      if (username) {
        sessionStorage.setItem('username', result.username);
        navigate('/home');
      }
    })
    .catch(err => console.log(err));
  }

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin} type="button">
        Login
      </button>
      <p>No account?</p>
      <Link to='/register'>
        Signup
      </Link>
    </div>
  );
}

export default Login;
