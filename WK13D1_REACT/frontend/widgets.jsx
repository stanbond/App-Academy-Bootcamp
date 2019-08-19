import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Tab from "./tab";

const tabs = [
  {title: "Whatever you want",
    content: "Also whatever you want",
  },
  {title: "afscasfcdfsadcfsacdsacd",
  content: "evevareveararcawct",
},
{title: "Text",
    content: "More text",
  }];

function Root(){
  return (
  <div>
    <Clock/>
    <Tab tab={tabs}/>
  </div>
  );
}



document.addEventListener('DOMContentLoaded', () => {
  console.log("stuff");
  ReactDOM.render(<Root />, document.getElementById('main'));
});