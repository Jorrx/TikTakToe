import { Link } from "react-router-dom"
import board from '../assets/homepageboard.svg'
const TikTakHome = () => {
    return (
        <div className="homepage">
            <img src={board}  />
            <h1>Tic Tac Toe</h1>
            <Link className="btn_1" to={'/play'}>Click to Play</Link>
        </div>
    )
}

export default TikTakHome
