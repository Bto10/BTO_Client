import './App.css';
import BettingTitle from './components/betting/title/BettingTitle';
import BettingDetail from './components/betting/BettingDetail';

function App() {
  let team = {
    'name': '1반',
    'totalbettingmoney' : '300',
    'bettingpercent':'70',
    'odds' : '1:3',
    'personnel' : 50,
    'progressbarLength' : 7.5,
  }

  return (
    <>
      <BettingTitle title="2반 vs 3반 피구" hour="1" minute="30" />
      <BettingDetail LeftTeam={team} RightTeam={team} />
    </>
  )
}

export default App
