import React, { FC, SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import board from '../assets/tiktakboard.svg'
import LIstItem from './listItem'

type Toe = {
    firstPlayer: string,
    setGameDetails: React.Dispatch<SetStateAction<any>>
    gameDetails: any
}

const winCoordinated = [
    [0, 1, 2],// Firstrow
    [2, 4, 6],// /
    [0, 3, 6],// l|
    [0, 4, 8],// \
    [1, 4, 7],// m|
    [2, 5, 8],// r|
    [3, 4, 5],// midRow
    [6, 7, 8],// endRow

]


const TikTakToeGame: FC<Toe> = ({ firstPlayer, setGameDetails, gameDetails }) => {

    const [player, setPlayer] = useState<string>(firstPlayer)
    const [boardItems, setBoardItems] = useState<string[] | null[]>(Array.from({ length: 9 }, () => null))
    const [winners, setWinners] = useState({
        count: 0,
        winner: null,
        possibleToWin: false
    })


    const gameStep = useCallback((rowIdx: string | null, idx: number) => {
        console.log(rowIdx, idx);

        if (rowIdx !== null) return;
        // debugger;    
        setBoardItems((prevBoardItems: any) => {
            const tmpBoard = [...prevBoardItems];
            tmpBoard[idx] = player;
            return tmpBoard;
        });

        setPlayer(prevPlayer => (prevPlayer === 'X' ? 'O' : 'X'));
        setWinners(prevWinners => {
            return prevWinners.count > 3
                ?
                ({
                    ...prevWinners,
                    possibleToWin: !prevWinners.possibleToWin,
                    count: prevWinners.count + 1
                })
                :
                ({
                    ...prevWinners,
                    count: prevWinners.count + 1
                })
        }
        );
    }, [player]);

    useEffect(() => {
        if (!winners.count) return
        const checkFields = (item: string, itemIdx: number) => {
            for (let idx = 0; idx < winCoordinated.length; idx++) {
                const el = winCoordinated[idx]
                console.log(idx, winners.count)
                if (item === boardItems[el[0]] && item === boardItems[el[1]] && item === boardItems[el[2]]) {
                    setWinners({ ...winners, winner: item })
                    setGameDetails({ ...gameDetails, [item]: gameDetails[item] + 1, gameisEnd: true })
                    return true
                } else if (winners.count > 8 && idx >= 7) {
                    setWinners({ ...winners, winner: 'Tie' })
                    setGameDetails({ ...gameDetails, gameisEnd: true })
                }
            }
        }
        console.count(winners.count)
        for (let idx = 0; idx < boardItems.length; idx++) {
            if (boardItems[idx] && checkFields(boardItems[idx], idx)) {
                console.log('hellow ')
                break
            }
        }

    }, [winners.possibleToWin])


    const memoizedProps = useMemo(() => {
        return { boardItems, player }
    }, [player])


    const resetGame = useCallback(() => {
        setWinners({ count: 0, winner: null, possibleToWin: false })
        setBoardItems([])
        console.log({ ...gameDetails })
        setGameDetails({ ...gameDetails, firstPlayer: null })
    }, [gameDetails.X, gameDetails.O])


    return (
        <>
            {winners.winner
                ?
                <div>
                    {winners.winner?.length > 1 ? <p className='resultOfGame'>Tie</p> : <p className='resultOfGame'>Player <span className={winners.winner + 'style'}>{winners.winner}</span> won</p>}
                    <p role='button' onClick={resetGame} className='btn_1'>Play Again</p>
                </div >
                :
                <div className='board'>
                    <>
                        {boardItems.map((item, idx) => {
                            return <LIstItem key={idx} item={item} idx={idx} {...memoizedProps} gameStep={gameStep} />
                        })}
                        <img className='boardImg' src={board} />
                    </>
                </div>
            }
        </>
    )
}

export default TikTakToeGame
