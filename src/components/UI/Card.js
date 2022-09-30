import React from 'react';
import './Card.css';


function Card({ children, className }) {
	const classes = 'card ' + className;
  
  /* 'children', which is automatically added to props, can be used when wrapping other components. Those components will then become children */
	return (<div className={classes}>{children}</div>);
}

export default Card;
