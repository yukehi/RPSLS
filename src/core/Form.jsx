import React,{useState} from 'react';
import Btn from './Btn';
import spock from './images/icon-spock.svg';
import lizard from './images/icon-lizard.svg';
import paper from './images/icon-paper.svg';
import rock from './images/icon-rock.svg';
import scissors from './images/icon-scissors.svg';
import './css/Form.css';
import createBattle from './js/createBattle.js';
import battle from './js/battle.js';


const Form = (props) => {
  const [show,setShow] = useState(false);
  const handleClick = (player) => {
    
    let slected = player
    const enemyList = ['spock', 'lizard', 'paper', 'rock', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 5);
    let randomEnemy = enemyList[randomNumber];


    if (slected === 'spock') {
        setShow(true)
        createBattle(slected, randomEnemy);
        setTimeout(function () {
            props.setScore(battle(slected, randomEnemy));
        }, 2000);

    }
    if (slected === 'lizard') {
        setShow(true)
        createBattle(slected, randomEnemy);
        setTimeout(function () {
            props.setScore(battle(slected, randomEnemy));
        }, 2000);

    }
    if (slected === 'paper') {
        setShow(true)
        createBattle(slected, randomEnemy);
        setTimeout(function () {
            props.setScore(battle(slected, randomEnemy));
        }, 2000);
    }
    if (slected === 'rock') {
        setShow(true)
        createBattle(slected, randomEnemy);
        setTimeout(function () {
            props.setScore(battle(slected, randomEnemy));
        }, 2000);
    }
    if (slected === 'scissors') {
        setShow(true)
        createBattle(slected, randomEnemy);
        setTimeout(function () {
            props.setScore(battle(slected, randomEnemy));
        }, 2000);
    }
  }
  const handlePlayAgein = () => {
    let element = document.getElementById("capsolle-area");
    element.parentNode.removeChild(element);  
    setShow(false)
    props.setScore('')
  }
  
  return (<>
  <div className="continor">
  {show ? (<div></div>) : (<div id="icons">
    <Btn battle={handleClick} id='spock' class='icon-spock icon inner-shadow' imgClass='img' src={spock}/>
    <Btn battle={handleClick} id='lizard' class='icon-lizard icon inner-shadow' imgClass='img' src={lizard}/>
    <Btn battle={handleClick} id='paper' class='icon-paper icon inner-shadow' imgClass='img' src={paper}/>
    <Btn battle={handleClick} id='rock' class='icon-rock icon inner-shadow' imgClass='img' src={rock}/>
    <Btn battle={handleClick} id='scissors' class='icon-scissors icon inner-shadow' imgClass='img' src={scissors}/>
    </div>)}

    {!show ?(<div></div>) : (<div className='BtnBox'><button className='btn' onClick={handlePlayAgein}>Play Agein</button></div>)}

    </div>
  </>);
}

export default Form;