import './App.css';
import './fonts.css'
import './reset.css'
import Sidebar from "../../BTO_Clinet/src/components/sidebar/sidebar.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
