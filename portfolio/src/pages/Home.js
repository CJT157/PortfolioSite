import styles from '../css/global.module.css';

export default function Home() {

  return (
    <div className={styles.page_container}>
      <div className={styles.page_message}>
        <p>Hi</p>
        <p>Hello</p>
        <p>and Welcome</p>
      </div>
    </div>
  )
}
