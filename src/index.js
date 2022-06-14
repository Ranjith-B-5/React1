import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

const today= new Date();
console.log(today)
const hour =today.getHours();

const style1={color:"red"};
var daytime="";

if(hour>=0 && hour<12)
{
 style1.color="orange";
daytime="morning";
}
else if(hour>=12 && hour<=18)
{
  style1.color="red";
  daytime="afternoon";
}
else
{
style1.color="blue";
daytime="evening";
}

ReactDOM.render(
  <div>
    <h1 style={style1} >
      {daytime}
    </h1>
  </div>,
  document.getElementById("root")
);
