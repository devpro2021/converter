import './App.module.scss';
import Converter from "./components/Converter/Converter";
import styles from './App.module.scss'
function App() {
  return (
    <div className={styles.app}>
      <Converter/>
    </div>

  );
}

export default App;
