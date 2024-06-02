import './App.css';
import './fonts.css'
import './reset.css'
import Sidebar from "./components/sidebar/sidebar";
import BettingList from './pages/betting/list/BettingList';

function App() {
  return (
      <div className="App">
          <Sidebar />
      </div>
  );
}

export default App;
