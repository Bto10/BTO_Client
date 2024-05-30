import './BettingList.css';
import BettingDetail from '../../../components/betting/BettingDetail';
import BettingTitle from '../../../components/betting/title/BettingTitle';

function BettingSet(props){
    return (
        <div id="BettingSet" className="BettingSet">
            <BettingTitle title={props.betting.title} />
            <div className='emptyspace'></div>
            <BettingDetail teams={props.betting.teams} />
        </div>
    );
}

function BettingList(props){
    let bettingList = props.bettingList;

    return (
        <div>
            {
                bettingList.map((betting) => {
                    console.log(betting);
                    return (
                        <BettingSet key={betting.id} betting={betting} />
                    );
                })
            }
        </div>
    );
}

export default BettingList;