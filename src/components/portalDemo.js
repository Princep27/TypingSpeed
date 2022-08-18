import React from "react";
import ReactDom from "react-dom";

function PortalDemo(props){
    if(!props.trigger) return null;

    return ReactDom.createPortal(
        <div className="portal-box">
            <div className="portal-container">
                <h1>💥TypingSpeed💥</h1>
                <div className="portal-info">
                    <div className="c-flex p-box">
                        <h1>{props.Time ? parseInt((props.Count/props.Time)*60) : 0}</h1>
                        <h4>words/min</h4>
                    </div>
                </div>
                <button onClick={()=>window.location.reload()}>Try-again</button>
            </div>            
        </div>
        ,document.getElementById("portal-root")
    );
}

export default PortalDemo;