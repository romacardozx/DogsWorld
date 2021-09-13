import React from 'react'
import style from './landing.module.css'
import { useHistory } from 'react-router'
import { FaDog, FaNpm, FaReact, FaPaw, FaNodeJs } from "react-icons/fa";
import { DiReact, DiCss3, DiNpm, DiJsBadge, DiHtml5, DiPostgresql, DiNodejsSmall, DiJavascript1 } from "react-icons/di";
import { SiPostgresql, SiRedux } from "react-icons/si";




//*Basic Landing Page with button to push user to /home
function LandingPage() {
  const history = useHistory()
  return (
    <div className={style.landing}>
      <div className={style.msgContainer}>
        <p className={style.title}>DogsWorld</p>
        <button className={style.button} onClick={() => history.push('/home')}>
         <p className={style.msjbutton}> Let's Go <FaDog/></p> 
        </button>
        <p className={style.created}>CREATED BY ROMAN CARDOZO WITH</p>
        <p className={style.icons}> <DiJsBadge/> < FaNodeJs/><DiCss3 /><DiHtml5/><FaReact /> <SiRedux /> <SiPostgresql /></p>
    </div>
   
    </div>
    
  )
}
export default LandingPage
