import './App.css';
import './fonts.css'
import './reset.css'
import Sidebar from "./components/sidebar/sidebar";
import BettingList from './pages/betting/list/BettingList';
import eventList from '../../../event.json';

function App() {
  return (
      <div className="App">
          <Sidebar />
          <section>
            <BettingList bettingList={eventList} />
          </section>
      </div>
  );
}

export default App;
