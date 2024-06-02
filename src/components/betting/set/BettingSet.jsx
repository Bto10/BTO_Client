import './bettingSet.css'
import BettingTitle from '../title/BettingTitle';
import BettingDetail from './../BettingDetail';

function BettingSet(props){
    return (
        <div id="BettingSet" className="BettingSet">
            <BettingTitle title={props.betting.title} />
            <div className='emptyspace'></div>
            <BettingDetail teams={props.betting.teams} />
        </div>
    );
}

export default BettingSet;