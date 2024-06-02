import './LeftTeam.css';

import money from '../../../assets/betting/component/img/blue_money.svg'
import people from '../../../assets/betting/component/img/blue_people.svg'
import percent from '../../../assets/betting/component/img/blue_percent.svg'

function LeftTeam(props) {
    let progressbarLength = props.info.bettingpercent/10;
    let totalBettingMoney = props.info.totalbettingmoney;
    let UnitIndex = 0;
    let moneyUnit = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qnt', 'Sxt', 'Sep', 'Oct', 'Non', 'Dec'];

    const LeftTeamProgressbar = {
        width: `${progressbarLength}rem`,
        height: '0.75rem',
        flexShrink: '0',

        margin: '0 0 0 auto',

        borderRadius: '62.5rem',
        background: '#3879FE',
    };

    while (totalBettingMoney >= 1000){
        totalBettingMoney = totalBettingMoney / 1000;
        UnitIndex++;
    }

    return (
        <div id='LeftTeam'>
            <div className='LeftTeam-name'>{props.info.name}</div>
            <div className='LeftTeam-totalbettingmoney'>
                <img src={money} alt='money' />
                <div className='LeftTeam-totalbettingmoney-text'>
                    {totalBettingMoney}{moneyUnit[UnitIndex]}
                </div>
            </div>
            <div className='LeftTeam-odds'>
                <img src={people} alt='people' />
                <div className='LeftTeam-odds-text'>
                    {props.info.odds}
                </div>
            </div>
            <div className='LeftTeam-personnel'>
                <img src={percent} alt='percent' />
                <div className='LeftTeam-personnel-text'>
                    {props.info.personnel}
                </div>
            </div>
            <div className='LeftTeam-bettingpercent'>{props.info.bettingpercent}%</div>
            <div style={LeftTeamProgressbar}>{props.info.progressbar}</div>
        </div>
    )
}

export default LeftTeam;