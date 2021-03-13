import styles from '../css/global.module.css';
import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <div className={styles.page_container}>
      <Navbar/>
      <div className={styles.page_message}>
        <p>Hi</p>
        <p>Hello</p>
        <p>& Welcome</p>
      </div>
    </div>
  )
}
