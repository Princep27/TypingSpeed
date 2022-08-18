import React from "react";

function Info(props){

    //console.log(props.Time);

   //  var str = props.text.slice(0,props.index);
   //  const arr = str.split(' ');
   //  var words = arr.filter(word => word !== '').length;
    
   //  console.log(words+" "+props.Count);
    
    if(props.Time === 60){
      props.handleStop();
    }
    
    //console.log(props.words);
    return (   
    <div className="box r-flex">
       <div className="box-container">
          <h1>{props.Time}</h1>
          <p>Seconds</p>
       </div>
       <div className="box-container">
          <h1>{props.Time ? parseInt((props.Count*60)/props.Time) : 0}</h1>
          <p>Word/min</p>
       </div>
    </div>
);
}

export default Info;