import React from 'react';
import './Footer.css';
import logo from '../../Assets/FooterLogo.png';
import terms from '../../tnc.pdf';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='footer-left'>
                <Link to={"/"}><img src={logo} alt='logo' className='footer-logo' title='News Report 24'/></Link>
            </div>
            <div className='footer-right'>
                <div className='right-content'>
                    <div className='contact'><Link to='mailto:newsreport23@gmail.com' className='mail-link'>Contact Us</Link></div>
                    <div className='terms'><Link to={terms} target='_blank' className='link-terms'>Terms and Conditions</Link></div>
                    <div className='social'>
                        <a href='https://www.facebook.com/' target='_blank'><FaFacebook className='facebook' title='Facebook'/></a>
                        <a href='https://www.instagram.com/' target='_blank'><FaInstagram className='instagram' title='Instagram'/></a>
                        <a href='https://www.x.com/' target='_blank'><FaSquareXTwitter className='twitter' title='X'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
