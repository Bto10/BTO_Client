import './BettingList.css';
import BettingSet from './../../../components/betting/set/BettingSet';

function BettingList({ eventList }){
    let bettingEvents = Object.keys(eventList); // 배팅 종목들 ex) 농구, 축구, 이어달리기

    let bettingList = Object.values(eventList).map((bettings, index) => {
        return (
            <div key={index} className='event'>
            <h2>{bettingEvents[index]}</h2>
            {
                Object.values(bettings).map((betting, index) => {
                    return (
                        <BettingSet key={betting.id || index} betting={betting} />
                    );
                })
            }
            </div>
        );
    });
    
    return (
        <div id='BettingList'>
            {bettingList}
        </div>
    );
}

export default BettingList;