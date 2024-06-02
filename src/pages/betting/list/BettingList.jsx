import './BettingList.css';
import BettingDetail from '../../../components/betting/BettingDetail';
import BettingTitle from '../../../components/betting/title/BettingTitle';

function BettingList(props){
    let bettingList = props.eventList;

    return (
        <div id='BettingList'>
            {
                bettingList.map((bettings) => {
                    return (
                        <div className='event'>
                        {
                            bettings.map((betting) => {
                                console.log(betting);
                                return (
                                    <BettingSet key={betting.id} betting={betting} />
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