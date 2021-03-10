import React from 'react';

const Btn = (props) => {
  const handleClick = (e) => {
    const click = e.currentTarget.id
    props.battle(click)
  }
  return (
    <div onClick={handleClick} id={props.id} className="circle">
        <div  className={props.class}><img className={props.imgClass} src={props.src} alt={props.imgClass}/></div>
      </div>
  );
}

export default Btn;