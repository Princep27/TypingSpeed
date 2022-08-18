import React from "react";
import Info from "./Info";
import TextArea from "./TextArea";
import Portal from "./portalDemo";
// import Input from "./Input";

function Body(){
    const [texxt,setTexxt] = React.useState("");
    const [count,setCount] = React.useState(0); 
    const [index,setIndex] = React.useState(0);
    const [sec,setSec] = React.useState(0);
    const [istrue,setIsTrue] = React.useState(1);
    const [len,setLen] = React.useState(0);
    const [start,setStart] = React.useState(false); 
    const [timeId,setTimerId] = React.useState(0);
    const [showPopup,setShowPopUp] = React.useState(false);
    const [extra,setExtra] = React.useState("");
    const [inputValue,setInputValue] = React.useState("");
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.REACT_APP_TYPING_KEY}`,
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
    };

    function getText(){
        fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
        .then(response => response.json())
        .then(response => setTexxt(response.content))
        .catch(err => setTexxt("React makes it painless to create interactive Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes")); 
    }
     
    React.useEffect(()=>{
        getText();
    },[]);
    

    React.useEffect(() => {
        let intervalId = null;
        if(start){
            intervalId = setInterval(() => {  
            setSec((sec) => sec + 1);  
            }, 1000);
            
            setTimerId(intervalId);
        }
        else{
            clearInterval(timeId);
        }  
      },[start]);

    function handleBackspace() {
        setExtra(extra.slice(0, -1));
        setIndex(index-1);

        if(index!==0 && istrue!==1){
            setIsTrue(istrue-1);
        }
    }

    function Stop(){
        setStart(false);
        setShowPopUp(true);
    }

    function handleChange(event){
        var temp = event.target.value;
        var char = temp[temp.length-1]; 
        setInputValue(temp);  
        
        if(temp.length === 1){
            setStart(true);
        }

        if(len-1 === temp.length){
            console.log("backSpace Pressed");
            handleBackspace();
            setLen(temp.length);
        }

        else if(index >= texxt.length){
            setIndex(index+1);
            setIsTrue(true+1);
            setLen(temp.length);
        }

        else if(extra.length){
            setExtra(extra+texxt[index]);
            setIndex(index+1);
            setIsTrue(istrue+1);
            setLen(temp.length);
        }   
        else if(char === texxt[index]){
            if(char === " " && texxt[index] === " "){
                if(istrue === 1)
                  setCount(count+1);
                setIsTrue(1);
                setInputValue("");
                setExtra(""); 
                setLen(0);
                setIndex(index+1);
            }
            else{
                setIndex(index+1);
                setLen(temp.length);
            }
        }
        else if(texxt[index] !== char){
            setExtra(extra+texxt[index]);
            setIndex(index+1);
            setIsTrue(istrue+1);
            setLen(temp.length);
        }
        
        if(index === texxt.length-1){
            if(texxt[index] === char){
                setCount(count+1);
                Stop();
            }
        }

        //console.log(texxt.length + " " + index);
    }

    return (
        <div>
            <Portal  Time={sec} Count={count} trigger={showPopup}/>
            <Info  handleStop={Stop} Time={sec} Count={count} index={index}/>
               <div className="c-flex min-height">
                    <div>
                      <TextArea Extra={extra} index={index} text={texxt}  Count={index}/>
                    </div>
                    <div className="r-flex">
                      <input type="text" autocorrect="off" autocapitalize="none" value={inputValue} onChange={handleChange} className="input-box" type="text"></input>
                    </div>
               </div>
        </div>
    );
}

export default Body;