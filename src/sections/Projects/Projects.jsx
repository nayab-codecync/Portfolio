import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/treply.png';
import freshBurger from '../../assets/smartknit.png';
import hipsster from '../../assets/naplozz.png';
import fitLift from '../../assets/brellhealth.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://treply.so/"
          p=" Mern Stack"
          h3="Treply"
        />
        <ProjectCard
          src={freshBurger}
          link="https://epteck.com/products/stichx/"
          p="Frontend | UI/UX"
          h3="StichX"
        />
        <ProjectCard
          src={hipsster}
          link="https://naplozz.vercel.app/"
          p="Frontend | ReactJS"
          h3="Naplozz"
        />
        <ProjectCard
          src={fitLift}
          link="https://www.brell.health/care-centers/"
          p="Frontend | UI/UX"
          h3="brell health"
        />
      </div>
    </section>
  );
}

export default Projects;
