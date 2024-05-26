import { useState } from 'react'
import './App.css'
import BettingTitle from './components/betting/BettingTitle'
import BettingDetail from './components/betting/BettingDetail'

function App() {
  let team1 = {
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
      <BettingDetail team1={team1} team2={team1} />
    </>
  )
}

export default App
