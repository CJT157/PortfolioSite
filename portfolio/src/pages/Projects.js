import styles from '../css/global.module.css';
import Navbar from '../components/Navbar';

export default function Projects() {

  return (
    <div className={styles.page_container}>
      <Navbar/>
      <div className={styles.project_container}>
        <ProjectDisplay
          name={"Checkers"}
          desc={"Created as a project for my CPS 240 class, has all functionality of a regular checkers game other than multi-jumps."}
          link={`https://github.com/CJT157/ChessGame`}
        />
        <ProjectDisplay
          name={"Text-to-Game Engine"}
          desc={"A game engine that can import a formatted text file and assmeble a playable rpg around it."}
          link={`https://github.com/CJT157/TextToGameEngine`}
        />
        <ProjectDisplay
          name={"IMDB Scraper"}
          desc={"Project for IEEE that I lead, involved creating a scraper for imdb, gathering information in a file, and then being used in a movie suggestion application."}
          link={`https://github.com/CJT157/IEEEScraper`}
        />
      </div>
    </div>
  )
}

function ProjectDisplay(props) {

  return (
    <div className={styles.project_display_container}>
      <h3>{props.name}</h3>
      {props.desc}
      <div>
        <a href={props.link}>Go To</a>
      </div>
    </div>
  )
}
