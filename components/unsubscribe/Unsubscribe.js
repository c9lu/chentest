import React from "react";

const getQueryStringValue=(key)=>{
    
    console.log(key);
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }
const Unsubscribe = ({doneMessage, chenPic, chenBox,  yorkdaleLogo, squareOneLogo, upperCanadaLogo, introMessage }) =>{

    let orgid = getQueryStringValue("orgid").toString();
    let imageSource = chenPic;

    if(orgid=="402"){
        imageSource = yorkdaleLogo;
    }
    else if(orgid=="403"){
        imageSource = upperCanadaLogo;
    }
    else if(orgid=="404"){

        imageSource = squareOneLogo;
    }
    return (
        
        <div>
            <span>{introMessage}</span>            
            <img src={imageSource.url} />

            <span>{doneMessage}</span>
            <img src={chenPic.url} width="600" height="500" />
            <div>{chenBox}</div>
        </div>
     
       
    );

};
export default Unsubscribe