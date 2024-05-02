import './Components.css';

export const EntryDisplay = ({ hours, description }) => {
  return (
    <div className='entry-display'>
      <div className='entry-hours-container'>
        <div className='entry-hours-label'>Hours:</div>
        <div>{hours}</div>
      </div>
      <div className='entry-description-label'>Description</div>
      <div className='entry-description'>{description}</div>
    </div>
  );
};

export const LoginOrSignup = ({ onChangeUsername, onChangePassword }) => {
  return (
    <>
      <form>
        <div className='login-or-signup-field'>
          <label className='login-or-signup-field-label'>Username</label>
          <input
            type='text'
            placeholder='Enter username'
            autoComplete='off'
            name='username'
            onChange={onChangeUsername}
          />
        </div>
        <div className='login-or-signup-field'>
          <label className='login-or-signup-field-label'>Password</label>
          <input
            type='text'
            placeholder='Enter password'
            autoComplete='off'
            name='password'
            onChange={onChangePassword}
          />
        </div>
      </form>
    </>
  );
};

export const LogoutButton = ({ handleLogout }) => {
  return (
    <div className='logout-button-container'>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  )
};
