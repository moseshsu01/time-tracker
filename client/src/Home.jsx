import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './constants/constants';
import './Home.css';

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
    <>
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
                      <div className='entry-display' key={j}>
                        <div>
                          <label>Hours</label>
                          <div>{entry.hours}</div>
                        </div>
                        <div>
                          <label>Description</label>
                          <div>{entry.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className='project-totals'>
          <h3>Project Totals</h3>
          {projectTotals.map((projectTotal, i) => {
            return (
              <div key={i}>
                <label>{projectTotal._id}</label>
                <div>{`${projectTotal.totalHours} Hours`}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to='/add-entry'>
        Add entry
      </Link>
    </>
  );
}

export default Home;
