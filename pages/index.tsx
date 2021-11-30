import type { NextPage } from 'next'
import Profile from './components/Profile';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Profile email="pramodmaali@gmail.com" mobile="9979538985"/>
    </div>
  )
}

export default Home
