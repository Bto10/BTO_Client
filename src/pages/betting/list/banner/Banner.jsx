import './Banner.css';
import BattingDetail from '../../../../components/betting/betting-teams/BettingDetail';
import data from '../../../../../../banner.json';

function Banner(/*{ data }*/){
    console.log(data.bettings);
    return (
        <div id="Banner">
            <h1 className='bettingTitleText'>마감 시간이 얼마 남지 않은 배팅들</h1>
            {
                data.bettings.map((betting, index) => {
                    return (
                        <BattingDetail key={index} teams={betting} />
                    );
                })
            }
        </div>
    );
}

export default Banner;