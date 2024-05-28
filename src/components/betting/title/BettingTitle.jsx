import './bettingTitle.css'

function BettingTitle(props) {
    let deadline = ``;

    if (props.hour){
        deadline += `${props.hour}시간 ${props.minute}분`;
    } else if (props.minute){
        deadline += `${props.minute}분`;
    }

    return (
        <div id={"BettingTitle"}>
            <h4 className="main-title">{props.title}</h4>
            <p className="deadline">{deadline} 후에 마감이 됩니다</p>
        </div>
    );
}

export default BettingTitle;