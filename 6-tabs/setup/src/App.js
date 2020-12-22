import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchjobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  const changeJob = (id) => {
    // const index = jobs.findIndex((job) => job.id === id);
    setValue(id);
  }

  useEffect(() => {
    fetchjobs();
  }, [])

  if (loading) {
    return <section className="section loading">
      <h2>Loading...</h2>
    </section>
  }

  const {company, dates, duties, title} = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experiences</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        { /* btn container */}
           <div className="btn-container">
            {
              jobs.map((job, index) => {
                return <button key={job.id} onClick={() => changeJob(index)}
                className={`job-btn ${index === value && 'active-btn'}`}>{job.company}</button>
              })
            }
           </div>
         
        { /* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
  return <h2>Jobs</h2>
}

export default App
