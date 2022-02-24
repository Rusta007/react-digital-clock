import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 2020 , 20 ,5, 24



let curDate = new Date();
curDate = curDate.getHours();


let greeting = "";
const cssStyle = {};



if(curDate >= 1 && curDate <12)
{
  greeting='Good Morning';
  cssStyle.color = "Green";
}
else if(curDate>=12 && curDate <18)
{
  greeting='Good Afternoon';
  cssStyle.color = "Yellow";
}
else
{
  greeting='Good Evening';
  cssStyle.color = "rgb(83, 216, 105)";
}


ReactDOM.render(
<>
<div className='main-container'>
<p className='time'>
        <span class="hour ">{}</span>
        :
        <span class="zero ">{}</span>
        :
        <span class="zero ">00</span>


    </p>

    
    <h1 className='main-box'>Hello , <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>
  , document.getElementById('root')
);