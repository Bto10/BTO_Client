import React from 'react';
import './bettingDetail.css';
import RightTeam from './RightTeam';
import LeftTeam from './LeftTeam';

function BettingDetail(props){
    return (
        <div id={"BettingDetail"}>
            <LeftTeam info={props.teams.LeftTeam} />
            <div className='line-box'>
                <div className="line"></div>
            </div>
            <RightTeam info={props.teams.RightTeam} />
        </div>
    );
}

export default BettingDetail;