import './RightTeam.css';

import money from '../../../assets/betting/component/img/red_money.svg'
import people from '../../../assets/betting/component/img/red_people.svg'
import percent from '../../../assets/betting/component/img/red_percent.svg'

function RightTeam({ info }){
    let progressbarLength = info[4]/10;
    let totalBettingMoney = info[1];
    let UnitIndex = 0;
    let moneyUnit = ['', 'K', 'M', 'B', 'T', 'Qd', 'Qnt', 'Sxt', 'Sep', 'Oct', 'Non', 'Dec'];

    const RightTeamProgressbar = {
        width: `${progressbarLength}rem`,
        height: '0.75rem',
        flexShrink: '0',

        margin: '0 auto 0 0',

        borderRadius: '62.5rem',
        background: '#F5019B',
    };

    while (totalBettingMoney >= 1000){
        totalBettingMoney = totalBettingMoney / 1000;
        UnitIndex += 1;
    }

    return (
        <div id='RightTeam'>
            <div className='RightTeam-name'>{info[0]}</div>
            <div className='RightTeam-totalbettingmoney'>
                <div className='RightTeam-totalbettingmoney-text'>
                    {totalBettingMoney}{moneyUnit[UnitIndex]}
                </div>
                <img src={money} alt='money' />
            </div>
            <div className='RightTeam-odds'>
                <div className='RightTeam-odds-text'>
                    {info[2]}
                </div>
                <img src={people} alt='people' />
            </div>
            <div className='RightTeam-personnel'>
                <div className='RightTeam-personnel-text'>
                    {info[3]}
                </div>
                <img src={percent} alt='percent' />
            </div>
            <div className='RightTeam-bettingpercent'>{info[4]}%</div>
            <div style={RightTeamProgressbar}></div>
        </div>
    )
}

export default RightTeam;