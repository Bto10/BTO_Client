import './profile.css'

function Profile(props){
    const profileImg = {
        width: '2.65rem',
        height: '2.625rem',
        flexShrink: 0,

        margin: '0 1rem',

        borderRadius: '625rem',
        background: `url(${props.ranking.ProfileImgPath}) lightgray 50% / cover no-repeat`,
    };

    return (
        <div id={"Profile"}>
            <div className='ranking-num'>{props.ranking.rankingNum}</div>
            <div className='profile-img' style={profileImg}></div>
            <div className='info'>
                <div className='profile-info'>{props.ranking.profileInfo}</div>
                <div className='profile-name'>{props.ranking.profileName}</div>
            </div>
            <div className='profile-money'>{props.ranking.profileMoney}</div>
            <div className='profile-success'>{props.ranking.profileSucces}</div>
            <div className='profile-fail'>{props.ranking.profileFail}</div>
            <div className='profile-maximum-profit-margin'>{props.ranking.profileMaximumProfitMargin}x</div>
            <div className='profile-betting-profit-margin'>{props.ranking.profileBettingProfitMargin}%</div>
        </div>
    )
}

export default Profile;