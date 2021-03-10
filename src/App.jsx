import React, {useState, useEffect} from 'react';
import Score from './core/Score';
import Form from './core/Form';
import _ from 'lodash'
import Rouls from './core/Rouls';


const App = () => {
  const [score,setScore] = useState('');
  
  const handleWin = (win) => {
    setScore(win)
  }
  return (<>
    <Score score={score}/>
    <Form setScore={handleWin} />
    <Rouls/>
  </>);
}

export default App;
