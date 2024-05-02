import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './constants/constants';
import './Home.css';
import { EntryDisplay } from './Components';

function Home() {
  const [entries, setEntries] = useState([]);
  const [projectTotals, setProjectTotals] = useState([]);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    axios.get(`http://localhost:8000/entries/weekly/${username}`)
    .then(result => {
      setEntries(result.data);
      console.log(result);
    })
    .catch(err => console.log(err))

    axios.get(`http://localhost:8000/entries/project-total/${username}`)
    .then(result => {
      setProjectTotals(result.data);
      console.log(result);
    })
    .catch(err => console.log(err))
  }, []);

  console.log(entries);
  console.log(projectTotals);

  return (
    <div className='home-container'>
      <div className='weekly-summary'>
        <h3>Weekly Summary</h3>
        <div className='project-container'>
          {projects.map((project, i) => {
            return (
              <div className='project-wrapper' key={i}>
                <h4>{project}</h4>
                {entries.filter(entry => entry.project_name == project).map((entry, j) => {
                  return (
                    <EntryDisplay
                      key={j}
                      hours={entry.hours}
                      description={entry.description}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className='project-totals'>
        <h3>Cumulative Project Totals</h3>
        {projectTotals.map((projectTotal, i) => {
          return (
            <div key={i} className='project-total-display'>
              <div className='project-name'>{projectTotal._id}</div>
              <div className='project-description'>{`${projectTotal.totalHours} Hours`}</div>
            </div>
          );
        })}
      </div>
      <div className='add-entry-link'>
        <Link to='/add-entry'>
          Add entry
        </Link>
      </div>
    </div>
  );
}

export default Home;
