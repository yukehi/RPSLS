
import spock from '../images/icon-spock.svg';
import lizard from '../images/icon-lizard.svg';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';

const toolsImgs = {
    spock: spock,
    lizard: lizard,
    paper: paper,
    rock: rock,
    scissors: scissors,

}



const createBattle = (playerSlction, enemySlction) =>{
    const player = document.createElement('div');
    const capsolle = document.createElement('div');
    const selctions = document.createElement('div');
    const hader = document.createElement('div');
    const enemy = document.createElement('div');
    const imgsP = document.createElement('img');
    const imgsE = document.createElement('img');
    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    // const btn = document.createElement('button');
    
    enemy.setAttribute('class', 'icon-battle inner-shadow battle-enemy enmey ');
    enemy.setAttribute('id',`${enemySlction}`)
    title2.innerHTML = "HOUSE PICKED"
    title2.setAttribute('class', 'title-area')
    imgsE.src = toolsImgs[enemySlction];
    player.setAttribute('class', 'icon-battle inner-shadow battle-player player ');
    player.setAttribute('id',`${playerSlction}`)
    imgsP.src = toolsImgs[playerSlction];
    title1.innerHTML = "YOU PICKED"
    title1.setAttribute('class', 'title-area')
    player.appendChild(imgsP);
    enemy.appendChild(imgsE);
    capsolle.setAttribute('class', 'capsolle-area');
    capsolle.setAttribute('id', 'capsolle-area');
    capsolle.appendChild(hader);
    hader.setAttribute('class', 'title-hader')
    hader.appendChild(title1);
    hader.appendChild(title2);
    capsolle.appendChild(selctions);
    selctions.setAttribute('class', 'capsolle-battle');
    selctions.appendChild(player);
   
    // btn.innerText ='play Agein';
    // btn.setAttribute('class','btn');
    // btn.setAttribute('id','btn');
    // setTimeout(function(){ selctions.appendChild(btn); }, 4000);
    setTimeout(function () {
        selctions.appendChild(enemy);
       
    }, 2000);
    // setTimeout(function () {
    //     document.querySelector('#btn').show();
    // }, 4000);
    document.querySelector(".continor").appendChild(capsolle);
}


export default createBattle;