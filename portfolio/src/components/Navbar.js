import styles from '../css/global.module.css';

export default function About() {

  return (
    <div className={styles.navbar_container}>
      <div className={styles.title_header}>
        Colin Truemner
      </div>
      <ul>
        <li><a href={`/`}>Home</a></li>
        <li><a href={`/about`}>About</a></li>
        <li><a href={`/projects`}>Projects</a></li>
      </ul>
    </div>
  )

}
