import React from 'react'
import styles from './Footer.module.css'
import logoWhiteText from '../assets/logo-white-text.svg'
import facebook from '../assets/shared/desktop/facebook.svg'
import instagram from '../assets/shared/desktop/instagram.svg'
import tiktok from '../assets/shared/desktop/tiktok.svg'
import youtube from '../assets/shared/desktop/youtube.svg'
import xTwitter from '../assets/shared/desktop/x-twitter.svg'
import { Outlet, Link } from "react-router-dom";
import rightArrowWhite from '../assets/right-arrow-white.svg'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.content}>
            <div className={styles.logoAndIcons}>
                <img src={logoWhiteText} width='170' height='16' alt='logo-white-text'/>
                <div className={styles.icons}>
                    <img src={facebook} alt='logo-white-text' width='512' height='512' className={styles.icon}/>
                    <img src={instagram} alt='logo-white-text' width='448' height='512' className={styles.icon}/>
                    <img src={xTwitter} alt='logo-white-text' width='448' height='512' className={styles.icon}/>
                    <img src={youtube} alt='logo-white-text' width='512' height='512' className={styles.icon}/>
                    <img src={tiktok} alt='logo-white-text' width='576' height='512' className={styles.icon}/>
                </div>
            </div>
            <div className={styles.siteMap}>
                <Link to='../' className={`h4 link2 `}>Home</Link>
                <Link to='../stories' className={`h4 link2 }`}>Stories</Link>
                <Link to='../features' className={`h4 link2 `}>Features</Link>
                <Link to='../pricing' className={`h4 link2 `}>Pricing</Link>
            </div>
            <div className={styles.getInviteAndCopyright}>
                <Link className={`h4 link2 ${styles.link}`}>
                    <p className={styles.linkText}>Get an invite</p>
                    <img src={rightArrowWhite} alt='right-arrow' width='42' height='14' />
                </Link>
                <p className={`p3 ${styles.copyRightText}`}>Copyright 2023. All Rights Reserved</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
