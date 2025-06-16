import './bettingTitle.css'

function BettingTitle({ title, hour, minute }) {
    return (
        <div id={"BettingTitle"}>
            <h4 className="main-title">{title}</h4>
            <p className="deadline">
                {
                    hour ? `${hour}시간 ${minute}분 후에 마감이 됩니다` :
                    (minute ? `${minute}분 후에 마감이 됩니다` : "곧 마감합니다")
                }
            </p>
        </div>
    );
}

export default BettingTitle;