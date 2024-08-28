import { useEffect, useState } from 'react';
import './Square.css';
import hoverEffect2 from '../assets/Sound/hover.wav';
import hoverEffect from '../assets/Sound/ple.wav';
import OneIcon from '../assets/Sound/one.png';
import BombIcon from '../assets/Sound/bomb.png';

function Square({  mine, setGameOver, gameOver, setScore}) {

  let [image, setImage] = useState(null);

  useEffect(() => {
    if (gameOver) {
      if (mine) {
        setImage(BombIcon);
      } else {
        setImage(OneIcon);
      }
    }
  }, [gameOver, mine])

  function mouseEnterHandle() {
    if (!image) {
      const sound = new Audio(hoverEffect2);
      sound.play();
    }
  }

  function clickHandler() {
    if (gameOver) return;
    
    if (!mine) {
      setScore((prevValue) => {
          return prevValue * 2;
      });
      setImage(OneIcon);
      const sound = new Audio(hoverEffect);
      sound.play();
    } else {
      setImage(BombIcon);
      setGameOver(true);
      alert("You Lose The Game");
    }
  }

  return <>
      <div 
      className='square-item'
      onMouseEnter={mouseEnterHandle}
      onClick={clickHandler} 
    >
      {image && <img height={90} width={90} src={image}/>}
    </div>
    </>
  
}

export default Square;
