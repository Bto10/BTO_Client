import './authenticated.css'
import whale from '../../../assets/authenticated/img/whale_3d.png'

const AuthenticatedHome = () => {
    let name = "한태영"
    let coin = 100000000
    let grade = 1

    return (
        <div id={"authenticatedHome"}>
            <section className={"banners"}>
                <p>홈</p>
                <section className={"banner"}>
                    <h1>환영합니다. {name}님</h1>
                    <div className={"br"}/>
                    <h2>현재 내 자산 :</h2> <h2 className={"user"}>{coin} 코인</h2>
                    <h3>현재 내 랭킹 :</h3> <h3 className={"user"}>{grade}등</h3>
                    <img src={whale}/>
                </section>
            </section>
        </div>
    )
}

export default AuthenticatedHome