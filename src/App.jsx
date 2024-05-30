import './App.css';
import './fonts.css'
import './reset.css'
import Sidebar from "./components/sidebar/sidebar";
import BettingList from './pages/betting/list/BettingList';

function App() {
  let bettingList = [
    {
      id : 1,
      event : 'basketball',
      title : {
        title : '1학년 농구 결승',
        hour : 24,
        minute : 30,
      },
      teams : {
        LeftTeam : {
          name: '1반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
        RightTeam : {
          name: '2반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
      },
    },
    {
      id : 2,
      event : 'bigvolleyball',
      title : {
        title : '1학년 빅발리볼 결승',
        hour : 24,
        minute : 30,
      },
      teams : {
        LeftTeam : {
          name: '1반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
        RightTeam : {
          name: '2반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
      },
    },
    {
      id : 3,
      event : 'dodgeball',
      title : {
        title : '1학년 피구 결승',
        hour : 24,
        minute : 30,
      },
      teams : {
        LeftTeam : {
          name: '1반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
        RightTeam : {
          name: '2반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
      },
    },
    {
      id : 4,
      event : 'catchthetail',
      title : {
        title : '1학년 꼬리잡기',
        hour : 24,
        minute : 30,
      },
      teams : {
        LeftTeam : {
          name: '1반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
        RightTeam : {
          name: '2반',
          totalbettingmoney: 300000000000000000,
          odds: '1:4',
          personnel: 300,
          bettingpercent: 75,
        },
      },
    },
  ];

  return (
      <div className="App">
          <Sidebar />
          <BettingList bettingList={bettingList} />
      </div>
  );
}

export default App;
