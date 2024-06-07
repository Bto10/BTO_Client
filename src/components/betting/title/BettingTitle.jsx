import './bettingTitle.css'

function BettingTitle(props) {
    let deadline;

    switch(true) {
        case !!props.title.hour:
            deadline = `${props.title.hour}시간 ${props.title.minute}분`;
        case !!props.title.minute:
            deadline = `${props.title.minute}분`;
    };

    return (
        <div id={"BettingTitle"}>
            <h4 className="main-title">{props.title.title}</h4>
            <p className="deadline">{deadline} 후에 마감이 됩니다</p>
        </div>
    );
}

export default BettingTitle;