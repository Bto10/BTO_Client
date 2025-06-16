import React from 'react';
import './bettingDetail.css';
import RightTeam from './RightTeam';
import LeftTeam from './LeftTeam';

function BettingDetail({ leftTeam, rightTeam }){
    return (
        <div id={"BettingDetail"}>
            <LeftTeam info={leftTeam} />
            <div className='line-box'>
                <div className="line" />
            </div>
            <RightTeam info={rightTeam} />
        </div>
    );
}

export default BettingDetail;