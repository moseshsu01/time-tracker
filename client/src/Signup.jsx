import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginOrSignup } from './Components';
import './Signup.css';

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
    .then(() => {
      navigate('/login');
    })
    .catch(err => {
      if (err.response.status === 409) {
        alert(err.response.data.message);
      }
      console.log(err)
    });
  };

  useEffect(() => {
    sessionStorage.removeItem('username');
  }, []);

  return (
    <div className='signup-page-container'>
      <h2>Register</h2>
      <LoginOrSignup
        onChangeUsername={(e) => setUsername(e.target.value)}
        onChangePassword={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup} type='button'>
        Register
      </button>
      <div className='signup-account-message'>Already have an account?</div>
      <Link to='/login'>
        Login
      </Link>
    </div>
  );
}

export default Signup;
