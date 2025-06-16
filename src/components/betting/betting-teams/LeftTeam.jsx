import './LeftTeam.css';

import money from '../../../assets/betting/component/img/blue_money.svg'
import people from '../../../assets/betting/component/img/blue_people.svg'
import percent from '../../../assets/betting/component/img/blue_percent.svg'

function LeftTeam({ info }) {
    let progressbarLength = info[4]/10;
    let totalBettingMoney = info[1];
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
        UnitIndex += 1;
    }

    return (
        <div id='LeftTeam'>
            <div className='LeftTeam-name'>{info[0]}</div>
            <div className='LeftTeam-totalbettingmoney'>
                <img src={money} alt='money' />
                <div className='LeftTeam-totalbettingmoney-text'>
                    {totalBettingMoney}{moneyUnit[UnitIndex]}
                </div>
            </div>
            <div className='LeftTeam-odds'>
                <img src={people} alt='people' />
                <div className='LeftTeam-odds-text'>
                    {info[2]}
                </div>
            </div>
            <div className='LeftTeam-personnel'>
                <img src={percent} alt='percent' />
                <div className='LeftTeam-personnel-text'>
                    {info[3]}
                </div>
            </div>
            <div className='LeftTeam-bettingpercent'>{info[4]}%</div>
            <div style={LeftTeamProgressbar}></div>
        </div>
    )
}

export default LeftTeam;