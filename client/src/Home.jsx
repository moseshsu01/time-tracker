import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { projects } from './constants/constants';
import { useNavigate } from 'react-router-dom';
import { EntryDisplay, LogoutButton } from './Components';
import './Home.css';

function Home() {
  const [entries, setEntries] = useState([]);
  const [projectTotals, setProjectTotals] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('username');
    navigate('/login');
  };

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    axios.get(`http://localhost:8000/entries/weekly/${username}`)
    .then(result => {
      setEntries(result.data);
    })
    .catch(err => console.log(err));

    axios.get(`http://localhost:8000/entries/project-total/${username}`)
    .then(result => {
      const projectTotalsMap = {};

      for (const item of result.data) {
        projectTotalsMap[item._id] = item.totalHours;
      }

      const projectTotalsArr = [];

      for (const project of projects) {
        projectTotalsArr.push({
          projectName: project,
          totalHours: (Math.round(projectTotalsMap[project] * 100) / 100) || 0
        });
      }
      setProjectTotals(projectTotalsArr);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className='home-page-container'>
      <LogoutButton handleLogout={handleLogout}/>
      <div className='weekly-summary'>
        <h3>Weekly Summary</h3>
        <div className='add-entry-link'>
          <Link to='/add-entry'>
            Add Entry
          </Link>
        </div>
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
              <div className='project-name'>{projectTotal.projectName}</div>
              <div className='project-description'>{`${projectTotal.totalHours} Hours`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
