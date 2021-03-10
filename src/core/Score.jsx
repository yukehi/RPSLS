import React , {useState, useEffect} from 'react';
import './css/score.css'
function Items(props) {
  
  return (
    <div class="box">
    <div><h2 class="content-title">Choose your weapon </h2></div>
    <div><h2 class="points">{props.score}</h2></div>
    
  </div>
  );
}

export default Items;
