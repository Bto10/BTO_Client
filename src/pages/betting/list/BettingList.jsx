import './BettingList.css';
import BettingSet from './../../../components/betting/set/BettingSet';
import React from 'react';

export const context = React.createContext();

function BettingList({ eventList }){
    let bettingEvents = Object.keys(eventList); // 배팅 종목들 ex) 농구, 축구, 이어달리기
    
    return (
        <div id='BettingList'>
            <h1 className='page-text'></h1>
            <Banner />
            {
                Object.values(eventList).map((bettings, index) => {
                    return (
                        <div key={index} className='event'>
                        <h2 className='subtopic'>{bettingEvents[index]}</h2>
                        {
                            Object.values(bettings).map((betting, index) => {
                                return (
                                    <div>
                                        <div className='bettingCounter'></div>
                                        <BettingSet key={betting.id || index} title={betting.title} teams={betting.teams} />
                                        <h1 className='before-text'></h1><h1 className='next-text'></h1>
                                    </div>
                                );
                            })
                        }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BettingList;