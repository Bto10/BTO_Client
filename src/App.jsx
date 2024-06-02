import './App.css';
import './fonts.css'
import './reset.css'
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home.jsx";

import BettingDetail from "./components/betting/BettingDetail.jsx"

function App() {
    return (
        <div className="App">
            <Sidebar />
            <Home />

            {/*<BettingDetail />*/}
        </div>
    );
}

export default App;
