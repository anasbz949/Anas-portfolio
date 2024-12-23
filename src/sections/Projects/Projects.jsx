import styles from './ProjectsStyles.module.css';
import chats from '../../assets/chats.png';
import snakebite from '../../assets/snake-bite.png';
import NPM from '../../assets/NPM.png';
import RPC from '../../assets/RPC.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chats}
          link="https://github.com/anasbz949/Wei-Chat.git"
          h3="Wei Chats"
          p="Chating App"
        />
        <ProjectCard
          src={snakebite}
          link="https://github.com/anasbz949/Snake-Bite.git"
          h3="Snake Bite"
          p="Snake game"
        />
        <ProjectCard
          src={NPM}
          link="https://github.com/anasbz949/Weather-API.git"
          h3="Weather"
          p="npm Weather-api"
        />
        <ProjectCard
          src={RPC}
          link="https://github.com/anasbz949/Rock-Paper-Scissors-.git"
          h3="Rock-Paper-Scissor"
          p="cring game"
        />
      </div>
    </section>
  );
}

export default Projects;
