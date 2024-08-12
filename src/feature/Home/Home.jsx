import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.about_intro}>
      <div className={styles.intro}>
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
