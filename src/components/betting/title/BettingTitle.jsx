import './bettingTitle.css'

function BettingTitle({ title }) {
    let deadline;

    switch(true) {
        case !!title.hour:
            deadline = `${title.hour}시간 ${title.minute}분`;
        case !!title.minute:
            deadline = `${title.minute}분`;
    };

    return (
        <div id={"BettingTitle"}>
            <h4 className="main-title">{title.title}</h4>
            <p className="deadline">{deadline} 후에 마감이 됩니다</p>
        </div>
    );
}

export default BettingTitle;