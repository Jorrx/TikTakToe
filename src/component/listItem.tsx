import React, { FC, memo, useEffect } from 'react'
import XLogo from '../assets/tiktakX.svg'
import OLogo from '../assets/tiktakO.svg'


interface Iprop {
    item: string | null
    idx: number
    gameStep: (item: string | null, idx: number) => void
    player: string,
    boardItems: (string | null)[]
}

export const stepsForXPlayer: any = {
    q: 0,
    w: 1,
    e: 2,
    a: 3,
    s: 4,
    d: 5,
    z: 6,
    x: 7,
    c: 8,
}

export const stepsForOPlayer: any = {
    i: 0,
    o: 1,
    p: 2,
    j: 3,
    k: 4,
    l: 5,
    n: 6,
    m: 7,
    ',': 8,
}

const LIstItem: FC<Iprop> = ({ gameStep, item, idx, player, boardItems }) => {
    // console.log('item',player)
    
    

    useEffect(() => {
        const handleKeyDown = (event: React.KeyboardEvent) => {
            console.log(stepsForXPlayer[event.key.toLocaleLowerCase()])
            if (player === 'X') {
                gameStep(boardItems[stepsForXPlayer[event.key.toLocaleLowerCase()]], stepsForXPlayer[event.key.toLocaleLowerCase()])
            } else if (player === 'O') {
                gameStep(boardItems[stepsForOPlayer[event.key.toLocaleLowerCase()]], stepsForOPlayer[event.key.toLocaleLowerCase()])
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [player]);

    return (
        <div
            className='boardItem'
            onClick={() => gameStep(item, idx)}
        >
            {item && <img src={item === 'X' ? XLogo : OLogo} alt="" />}
        </div >
    )
}

export default memo(LIstItem)
