import React, {useState} from "react";
import styles from './Unsubscribe.module.css';
const getQueryStringValue=(key)=>{
    
    console.log(key);
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

const Unsubscribe = ({unsubscribeCompletedMessage, oxfordLogo,  yorkdaleLogo, squareOneLogo, upperCanadaLogo, introMessage }) =>{

    let orgid = getQueryStringValue("orgid").toString();
    let imageSource = oxfordLogo;
    
   // this.setState({completed:false})
    const [completed, setCompleted] = useState(false);

    if(orgid=="402"){
        imageSource = yorkdaleLogo;
    }
    else if(orgid=="403"){
        imageSource = upperCanadaLogo;
    }
    else if(orgid=="404"){

        imageSource = squareOneLogo;
    }
    let email = getQueryStringValue("email").toString();
    
    return (
    
    <div className={styles.container} role="main">
        {completed==false? 
        <div >        
            <img src={imageSource.url} className={styles.logo}/>
            <div className={styles.introMessage}>{introMessage}</div>  
            
            <br/>
          
            <button type="button" className={styles.colorButton} onClick={()=>setCompleted(true)}>Unsubscribe</button> <br/>
        </div>:null}
        {completed==true?<div dangerouslySetInnerHTML={{__html:unsubscribeCompletedMessage}}/>:null}
        
    </div>
        
       
    );

};
export default Unsubscribe