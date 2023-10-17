import styles from './Navbar.module.css'
import logoBlackText from '../assets/shared/desktop/logo-black-text.svg'
import { Link } from "react-router-dom";
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'
import React from 'react'
import { useState } from 'react';



const Navbar = () => {

    const [icon, setIcon] = useState({image: menu, width: '20', height: '6'})
    const [displayMenu, setDisplayMenu] = useState(false)
    const [classNames, setClassNames] = useState(
        {linkContainer: styles.linkContainer1,
         content: styles.content1,
         getInvite: styles.getInvite1})

    const handleClick = () => {
        updateIcon()
        updateClassNames()
        updateDisplayMenu()
    }

    const updateIcon = () => {
        if(displayMenu){
            setIcon({image: menu, width: '20', height: '6'})
        } else{
            setIcon({image: close, width: '16', height: '15'})   
        }
    }

    const updateClassNames = () => {
        if(displayMenu){
            setClassNames({
                linkContainer: styles.linkContainer1,
                content: styles.content1,
                getInvite: styles.getInvite1
            })
        } else{
            setClassNames({
                linkContainer: styles.linkContainer2,
                content: styles.content2,
                getInvite: styles.getInvite2
            })

        }
    }

    const updateDisplayMenu = () => {
        if(displayMenu){
            setDisplayMenu(false)
        } else{
            setDisplayMenu(true)
        }
    }





  return (
    <div className={styles.navbarContainer}>
        <div className={classNames.content}>
        <Link to='../photosnap' className={styles.logo}>
            <img src={logoBlackText} alt='triangle-path' width='170' height='16'/>
        </Link>
            <div className={classNames.linkContainer}>
                <Link to='../photosnap/stories' className={`h4 ${styles.link}`}>STORIES</Link>
                <Link to='../photosnap/features'className={`h4 ${styles.link}`}>FEATURES</Link>
                <Link to='../photosnap/pricing' className={`h4 ${styles.link}`}>PRICING</Link>
            </div>
            <Link to='../photosnap/comingsoon' className={classNames.getInvite} >
                <button className={`h4 button1 ${styles.button}`}>GET AN INVITE</button>
            </Link>
            <div className={styles.menu} onClick={handleClick}>
                <img src={icon.image} alt='menu' width={icon.width} height={icon.height}/>
            </div> 
        </div>
    </div>
  )
}

export default Navbar
