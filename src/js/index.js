//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import 'font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types'; 


// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (<div className = "MainCounter">
        <div className = "Calendar">
        <FontAwesomeIcon icon={faClock} />
        </div>
        <div className = "six">{props.digitSix}</div>
        <div className = "five">{props.digitFive}</div>
        <div className = "four">{props.digitFour}</div>
        <div className = "three">{props.digitThree}</div>
        <div className = "two">{props.digitTwo}</div>
        <div className = "one">{props.digitOne}</div>
    </div>)
};
SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;  

setInterval(function(){
    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
    
    console.log(six,five,four,three,two,one);
    counter++;
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>, document.querySelector("#app"));

},1000);



