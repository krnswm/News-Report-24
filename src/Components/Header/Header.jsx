import React from 'react';
import logo from '../../Assets/NewsLogo.png';
import { IoSearchOutline } from "react-icons/io5";
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header-items'>
            <div className='together'>
                {/* <Link to={"/"}> */}
                    <img src={logo} alt='News Logo' className='logo' title="News Report 24"/>
                {/* </Link> */}
                <nav className='navbar'>
                    <ul>
                        <li className='top-headlines options'>Top Headlines</li>
                        <li className='general options'>General</li>
                        <li className='business options'>Business</li>
                        <li className='entertainment options'>Entertainment</li>
                        <li className='health options'>Health</li>
                        <li className='science options'>Science</li>
                        <li className='sports options'>Sports</li>
                        <li className='technology options'>Technology</li>
                    </ul>
                </nav>
            </div>
            <div className='search-and-icon'>
                <input type='text' placeholder='Search...' className='search-bar'/>
                <IoSearchOutline className='search-icon' title='search'/>
            </div>
        </div>
    </div>
  )
}

export default Header