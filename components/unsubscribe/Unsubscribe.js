import React, {useEffect, useState} from "react";
import styles from './Unsubscribe.module.css';
import { renderHTML } from 'agility/utils'

const getQueryStringValue=(key)=>{
    
    console.log(key);
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }

const Unsubscribe = ({unsubscribeCompletedMessage, oxfordLogo,  yorkdaleLogo, squareOneLogo, upperCanadaLogo, introMessage }) =>{

    let orgid = getQueryStringValue("orgid").toString();
    let imageSource = oxfordLogo;
    
   // this.setState({completed:false})
    const [completed, setCompleted] = useState(false);
    const homePage = document.getElementById("homePage");
    if(orgid=="402"){
        imageSource = yorkdaleLogo;
        homePage?homePage.href="https://yorkdale.com/":'#';
    }
    else if(orgid=="403"){
        imageSource = upperCanadaLogo;
        homePage?homePage.href="https://uppercanadamall.com/":'#';
    }
    else if(orgid=="404"){

        imageSource = squareOneLogo;
        homePage?homePage.href="https://shopsquareone.com/":'#';
    }
    let email = getQueryStringValue("email").toString();
    let websiteUrl = '';
    
    useEffect(()=>{
        document.getElementById('emailAdress').innerText = email;
       
      
    },[]);
    return (
    
    <div>
        {completed==false? 
        <div className={styles.container} role="main">        
            <img src={imageSource.url} className={styles.logo}/>
            <div className={styles.introMessage} dangerouslySetInnerHTML={renderHTML(introMessage)}/>  
            
            <br/>
          
            <button type="button" className={styles.colorButton} onClick={()=>setCompleted(true)}>Unsubscribe</button> <br/>
        </div>:null}
        
        <div style={{display:completed==true?"block":"none"}}><div className={styles.container} role="main"><div dangerouslySetInnerHTML={{__html:unsubscribeCompletedMessage}}/> </div>
        </div>
    </div>
        
       
    );

};
export default Unsubscribe