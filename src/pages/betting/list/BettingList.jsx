import './BettingList.css';

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