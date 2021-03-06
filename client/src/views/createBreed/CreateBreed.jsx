import React from 'react'
import style from './Createbreed.module.css'
import Create from './../../components/create/create'
import { Link } from 'react-router-dom'
import { GiSittingDog } from "react-icons/gi";


//! View to present Create Component

function CreateBreed() {
  return (
    <div className={style.mainContainer}>
      <Link to="/home" className={style.arrow}>
        <span class="fas fa-caret-square-right"></span>
      </Link>
      <div className={style.secondContainer}>
        <p className={style.title}>Create Dog Breed<GiSittingDog/></p>
        <Create />
      </div>
    </div>
  )
}

export default CreateBreed