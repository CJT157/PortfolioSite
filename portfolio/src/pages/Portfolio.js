import styles from '../css/global.module.css';
import Resume from '../components/Resume_Colin_Truemner.pdf';

export default function Portfolio() {

  return (
    <div className={styles.page_container}>
      <p>Hello</p>
      <p>This is where the stuff I do goes</p>
      <a href={Resume}>Resume</a>
    </div>
  )
}
