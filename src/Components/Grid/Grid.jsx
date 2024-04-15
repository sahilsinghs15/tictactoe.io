import { useState } from "react";
import Card from "../Cards/Card";
import './Grid.css';
import Iswinner from "../../helpers/Checkwinners";
function Grid({numberOfCards}){
    const [board , setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn , setTurn] = useState(true);
    const [winner , setWinner] = useState(null);

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }
    function play(index){
        if(turn == true){
            board[index] = 'O';
        }else{
            board[index] = 'X';
        }

        const win = Iswinner(board , turn ? 'O' : 'X');

        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    return (
        
        <div className="grid-wrapper">
            <h1 className="turn-highlight">Current Turn : {(turn) ? 'O' : 'X'}</h1>
            {
                winner && (
                    <div className="result">
                        <h1 id="winner"> Winner is : {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </div>
                )
            }
            
            <div className="grid">
                {board.map((ele, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay = {play} player = {ele} index = {idx} />)}
            </div>
        </div>
       

    )
}

export default Grid;