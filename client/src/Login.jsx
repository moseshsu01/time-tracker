import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginOrSignup } from './Components';
import './Login.css';

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
        sessionStorage.setItem('username', username);
        navigate('/home');
      }
    })
    .catch(err => {
      console.log(err);
      const errStatus = err.response.status;
      if (errStatus === 404 || errStatus === 401) {
        alert(err.response.data.message);
      }
    });
  };

  return (
    <div className='login-page-container'>
      <h2>Login</h2>
      <LoginOrSignup
        onChangeUsername={(e) => setUsername(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} type="button">
        Login
      </button>
      <div className='login-account-message'>No account?</div>
      <Link to='/register'>
        Signup
      </Link>
    </div>
  );
}

export default Login;
