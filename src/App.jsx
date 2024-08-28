import { useState } from 'react';
import './App.css';
import Square from './Square/Square';


function getRandomNumber(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumbers = [];

while(randomNumbers.length < 7){
  let randomNumber = getRandomNumber(1, 25);
  if(!randomNumbers.includes(randomNumber)){
    randomNumbers.push(randomNumber);
  }
}

console.log(randomNumbers);

function App(){

  let [gameOver,setGameOver] = useState(false);
  let [score, setScore] = useState(10);
  let items = [];

for (let i = 1; i <= 25; i++) {
  if(randomNumbers.includes(i)) 
  {
    items.push(<Square setScore={setScore} getOver={gameOver} setGameOver={setGameOver} mine={true} key= {i} />);
  }
    else{
    items.push(<Square setScore={setScore} getOver={gameOver} setGameOver={setGameOver} key= {i} />);
    }
  }

  return (
 <>
 <div className='d-flex'> 
 <div className="score">
  <p>Score</p>
  <p>{score}</p>
 </div>
 <div className='d-grid'>
{items}
 </div>
 </div>
 </>
  )
}

export default App; 