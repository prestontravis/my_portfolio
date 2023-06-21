import React from 'react';
import passwordGeneratorImage from '../images/password_generator.png'
import animeExplorerImage from '../images/anime_explorer.png';
import toDoImage from '../images/todo.png'
import workDaySchedulerImage from '../images/work_day_scheduler.png'
import weatherDashboardImage from '../images/weather_dashboard.png'
import codeQuizImage from '../images/coding_quiz.png'
import "../styles/Portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: 'Anime Explorer',
      image: animeExplorerImage,
      deployLink: 'https://prestontravis.github.io/Anime_Explorer/',
      githubLink: 'https://github.com/prestontravis/Anime_Explorer/',
    },
    {
      title: 'Password Generator',
      image: passwordGeneratorImage,
      deployLink: 'https://prestontravis.github.io/password_generator/',
      githubLink: 'https://github.com/prestontravis/password_generator',
    },
    {
      title: 'To-Do List',
      image: toDoImage,
      deployLink: 'https://to-do-application-650651e56723.herokuapp.com/',
      githubLink: 'https://github.com/johnfitz3/project-3',
    },
    {
      title: 'Work Day Scheduler',
      image: workDaySchedulerImage,
      deployLink: 'https://prestontravis.github.io/Work_Day_Scheduler/',
      githubLink: 'https://github.com/prestontravis/Work_Day_Scheduler',
    },
    {
      title: 'Weather Dashboard',
      image: weatherDashboardImage,
      deployLink: 'https://prestontravis.github.io/weather_dashboard/',
      githubLink: 'https://github.com/prestontravis/weather_dashboard',
    },
    {
      title: 'Coding Quiz',
      image: codeQuizImage,
      deployLink: 'https://prestontravis.github.io/codingquiz/',
      githubLink: 'https://github.com/prestontravis/codingquiz',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <img className="project-image" src={project.image} alt={project.title} />
            <div className="project-links">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
