
import { stepsForXPlayer } from '../component/listItem.tsx'
import { stepsForOPlayer } from '../component/listItem.tsx'
import boardX from '../assets/tiktakboardX.svg'
import boardO from '../assets/tiktakboardO.svg'


const TikTakEndSection = ({gameDetails , resetScore , restartGame}) => {
    return (
        <section className='end'>
            {(gameDetails.firstPlayer && !gameDetails.gameisEnd) && <div className='board player_keys Xstyle'>

                {Object.keys(stepsForXPlayer).map(el =>
                    <div className='boardItem player_keys Xstyle'>{el}</div>
                )}
                <img className='boardImg player_keys' src={boardX} />
            </div>}
            <div>
                {gameDetails.O || gameDetails.X ? <p role='button' onClick={resetScore}>V - Reset Score</p> : ''}
                {!gameDetails.gameisEnd ? <p role='button' onClick={restartGame}>R - Restart Game</p> : ''}
            </div>
            {(gameDetails.firstPlayer && !gameDetails.gameisEnd) && <div className='board player_keys Ostyle'>
                {Object.keys(stepsForOPlayer).map(el =>
                    <div className='boardItem player_keys Ostyle'>{el}</div>
                )}
                <img className='boardImg player_keys' src={boardO} color='red' />
            </div>}
        </section>
    )
}

export default TikTakEndSection
