import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './constants/constants';
import axios from 'axios';
import { LogoutButton } from './Components';
import { useNavigate } from 'react-router-dom';
import './AddEntry.css';

function AddEntry() {
  const [project, setProject] = useState(projects[0]);
  const [hours, setHours] = useState(0);
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    navigate('/login');
  };

  const handleAddEntry = () => {
    if (hours <= 0) {
      alert('Please enter a valid number of hours');
      return;
    }

    if (description.trim() === '') {
      alert('Please enter a description');
      return;
    }

    const entryObj = {
      username: sessionStorage.getItem('username'),
      project_name: project,
      hours: hours,
      description: description
    };

    axios.post('http://localhost:8000/entries', entryObj)
    .then(() => {
      alert('Add successful');
      setHours(0);
      setDescription('');
    })
    .catch(err => console.log(err));
  }

  return (
    <div className='add-entry-page-container'>
      <LogoutButton handleLogout={handleLogout}/>
      <div className='add-entry-container'>
        <h3>Add a new entry</h3>
          <div className='home-link'>
          <Link to='/home'>
            Home
          </Link>
        </div>
        <form>
          <div className='project-field-container'>
            <label className='project-field-label'>Project</label>
            <select onChange={e => setProject(e.target.value)}>
              {projects.map((project, i) => (
                <option value={project} key={i} >{project}</option>
              ))}
            </select>
          </div>

          <div className='project-field-container'>
            <label className='project-field-label'>Hours</label>
            <input type='number' min='0' step='any' value={hours} onChange={(e) => setHours(e.target.value)}/>
          </div>

          <div className='project-field-container'>
            <label className='project-field-label'>Description</label>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
        </form>
        <button onClick={handleAddEntry} type='button'>
          Add Entry
        </button>
      </div>
    </div>
  );
}

export default AddEntry;
