import { useCallback, useState } from 'react'
import TikTakToeGame from '../component/TikTakToeGame'
import XLogo from '../assets/tiktakX.svg'
import OLogo from '../assets/tiktakO.svg'
import TikTakEndSection from '../component/TikTakEndSection'




interface TikTak {
    X: number,
    O: number,
    firstPlayer: null | string
    gameisEnd: boolean;
}


const TikTakToe = () => {

    const [gameDetails, setGameDetails] = useState<TikTak>({
        X: 0,
        O: 0,
        firstPlayer: null,
        gameisEnd: true
    })

    const selectFirstPlayer = useCallback((firstPlayer: string) => {
        setGameDetails({ ...gameDetails, firstPlayer, gameisEnd: false })
    }, [gameDetails.X, gameDetails.O])

    const resetScore = useCallback(() => {
        console.log('called')

        setGameDetails({ ...gameDetails, X: 0, O: 0 })
    }, [gameDetails])

    const restartGame = useCallback(() => {
        console.log('called')
        setGameDetails({ ...gameDetails, firstPlayer: null })
    }, [gameDetails])

    return (
        <main className='tiktak'>
            <div>
            <h1>Tik Tac Toe</h1>
                <p className='score'><span className='Xstyle'>{gameDetails.X}</span> : <span className='Ostyle'>{gameDetails.O}</span></p>
                {!gameDetails.firstPlayer && <p className='subtitle'>Pick a player and start playing</p>}
            </div>
            {
                !gameDetails.firstPlayer
                    ?
                    <>
                        {/* <p className='subtitle'>Pick a player and start playing</p> */}
                        <div className='selection_div'>
                            <img src={XLogo} onClick={() => selectFirstPlayer('X')} alt="X" />
                            <div />
                            <img src={OLogo} onClick={() => selectFirstPlayer('O')} alt="O" />
                        </div>
                    </>
                    :
                    <TikTakToeGame firstPlayer={gameDetails.firstPlayer} setGameDetails={setGameDetails} gameDetails={gameDetails} />
            }
            <TikTakEndSection gameDetails={gameDetails} resetScore restartGame/>
        </main >
    )
}

export default TikTakToe
