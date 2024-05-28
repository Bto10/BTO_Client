import './LeftTeam.css';

import money from '../../../assets/betting/img/blue_money.svg'
import people from '../../../assets/betting/img/blue_people.svg'
import percent from '../../../assets/betting/img/blue_percent.svg'

function LeftTeam(props) {
    const LeftTeamProgressbar = {
        width: `${props.info.progressbarLength}rem`,
        height: '0.75rem',
        flexShrink: '0',

        margin: '0 0 0 auto',

        borderRadius: '62.5rem',
        background: '#3879FE',
    };

    return (
        <div id={"LeftTeam"}>
            <div className='LeftTeam-name'>{props.info.name}</div>
            <div className='LeftTeam-totalbettingmoney'>
                <div className='img'>
                    <img src={money} alt='money' />
                </div>
                <div className='LeftTeam-totalbettingmoney-text'>
                    {props.info.totalbettingmoney}
                </div>
            </div>
            <div className='LeftTeam-odds'>
                <img src={percent} alt='percent' />
                <div className='LeftTeam-odds-text'>
                    {props.info.odds}
                </div>
            </div>
            <div className='LeftTeam-personnel'>
                <img src={people} alt='people' />
                <div className='LeftTeam-personnel-text'>
                    {props.info.personnel}
                </div>
            </div>
            <div className='LeftTeam-bettingpercent'>{props.info.bettingpercent}%</div>
            <div className='LeftTeam-progressbar' style={LeftTeamProgressbar}>{props.info.progressbar}</div>
        </div>
    )
}

export default LeftTeam;