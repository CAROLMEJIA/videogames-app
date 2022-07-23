import React from 'react';
import {Link} from 'react-router-dom'
import styles from "./landingPage.module.css";
import image from "../img/logo.png" 


function LandingPage(){

    return(
        <div className={styles.contenedor}>
            <div className={styles.caja}>
            <img src={image} className={styles.image}></img>
           
            <Link to='/home'>
                <button className={styles.btn}>INGRESAR</button>
            </Link>
            </div>
        </div>
    )
    
}

export default LandingPage;