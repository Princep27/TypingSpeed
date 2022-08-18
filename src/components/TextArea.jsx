import React from "react";

function TextArea(props){

    const s1 = props.text.slice(0,props.index-props.Extra.length);
    const s2 = props.text.slice(props.index, props.text.length);
    //console.log(props.index);
  
    //console.log(props.text.length);
    if(props.text.length > 300){
      setTimeout(()=>{
        window.location.reload()
      },100);
    }

    for(var i=0;i<props.text.length;i++){
      if(props.text[i] === '—' || props.text[i]===')' || props.text[i]==='(' || props.text[i]==='’' || props.text[i]==='‘' || props.text[i]==='\n')
      setTimeout(()=>{
        window.location.reload()
      },100);
    }
      

    return (
    <div className="r-flex">
        <div className="Text-Area">
          <span style={{color:"#606060",backgroundColor:"#FFCC99"}}>{s1}</span>
          <span style={{backgroundColor:"#E77259"}}>{props.Extra}</span>
          <span>{s2}</span>
        </div>        
    </div>
);
}

export default TextArea;