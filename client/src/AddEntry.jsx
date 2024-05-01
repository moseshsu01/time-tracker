import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './constants/constants';
import axios from 'axios';

function AddEntry() {
  const [project, setProject] = useState(projects[0]);
  const [hours, setHours] = useState(0);
  const [description, setDescription] = useState('');

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
      username: sessionStorage.getItem("username"),
      project_name: project,
      hours: hours,
      description: description
    };

    console.log(entryObj);

    axios.post('http://localhost:8000/entries', entryObj)
    .then(result => {
      alert('Add successful');
      setProject(projects[0]);
      setHours(0);
      setDescription('');
      console.log(result);
    })
    .catch(err => {
      // if (err.response.status === 409) {
      //   alert(err.response.data.message);
      // }
      console.log(err)
    });
  }

  return (
    <>
      <div>{project}</div>
      <div>
        <h3>Add a new entry</h3>
        <form>
          <div>
            <label>Project</label>
            <select onChange={e => setProject(e.target.value)}>
              {projects.map((project, i) => (
                <option value={project} key={i} >{project}</option>
              ))}
            </select>
          </div>

          <div className='item-field'>
            <label>Hours</label>
            <input type='number' min='0' step='any' value={hours} onChange={(e) => setHours(e.target.value)}/>
          </div>

          <div className='item-field'>
            <label>Description</label>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
          </div>
        </form>
        <button onClick={handleAddEntry} type='button'>
          Add Entry
        </button>
      </div>
      <Link to='/home'>
        Home
      </Link>
    </>
  );
}

export default AddEntry;
