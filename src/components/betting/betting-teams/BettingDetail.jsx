import React from 'react';
import './bettingDetail.css';
import RightTeam from './RightTeam';
import LeftTeam from './LeftTeam';

function BettingDetail(LeftTeam, RightTeam){
    return (
        <div id={"BettingDetail"}>
            <LeftTeam info={LeftTeam} />
            <div className='line-box'>
                <div className="line" />
            </div>
            <RightTeam info={RightTeam} />
        </div>
    );
}

export default BettingDetail;