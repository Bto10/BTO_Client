import React, { useState, useEffect } from 'react';
import './bettingSet.css';
import BettingTitle from '../title/BettingTitle';
import BettingDetail from './../betting-teams/BettingDetail';

function BettingSet({ title, teams }) {
    const [bettingTitle, setBettingTitle] = useState({ title: "배팅", hour: 24, minute: 30 });
    const [bettingTeams, setBettingTeams] = useState({
        "LeftTeam": {
            "name": "0팀",
            "totalbettingmoney": 300000000000000000,
            "odds": "1:1",
            "personnel": 300,
            "bettingpercent": 50
        },
        "RightTeam": {
            "name": "0팀",
            "totalbettingmoney": 300000000000000000,
            "odds": "1:1",
            "personnel": 300,
            "bettingpercent": 50
        }
    });

    const bettingTeamsArray = Object.values(bettingTeams);

    const handleTitle = async (at) => {
        setBettingTitle((prev) => {
            return {
                ...prev,
                title: at[0],
                hour : at[1],
                minute : at[2]
            }
        });
    }

    const handleTeams = async (at) => {
        setBettingTeams((prev) => {
            return {
                ...prev,
                "LeftTeam": {
                    "name": at[0].name,
                    "totalbettingmoney": at[0].totalbettingmoney,
                    "odds": at[0].odds,
                    "personnel": at[0].personnel,
                    "bettingpercent": at[0].bettingpercent
                },
                "RightTeam": {
                    "name": at[1].name,
                    "totalbettingmoney": at[1].totalbettingmoney,
                    "odds": at[1].odds,
                    "personnel": at[1].personnel,
                    "bettingpercent": at[1].bettingpercent
                }
            }
        });
    }

    useEffect(() => {
        if (title) {
            const titleArray = Object.values(title)
            handleTitle(titleArray)
        }
    }, [title]);

    useEffect(() => {
        if (teams) {
            const teamsArray = Object.values(teams);
            handleTeams(teamsArray);
        }
    }, [teams]);
    
    return (
        <div id='BettingSet' className='BettingSet'>
            <BettingTitle title={bettingTitle.title} hour={bettingTitle.hour} minute={bettingTitle.minute} />
            <div className='emptyspace'></div>
            <BettingDetail leftTeam={Object.values(bettingTeamsArray[0])} rightTeam={Object.values(bettingTeamsArray[1])} />
        </div>
    );
}

export default BettingSet;