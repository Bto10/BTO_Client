import './bettingSet.css'
import BettingTitle from '../title/BettingTitle';
import BettingDetail from './../betting-teams/BettingDetail';

function BettingSet(title, teams){
    return (
        <div id="BettingSet" className="BettingSet">
            <BettingTitle title={title} />
            <div className='emptyspace'></div>
            <BettingDetail LeftTeam={teams.LeftTeam} RightTeam={teams.RightTeam} />
        </div>
    );
}

export default BettingSet;