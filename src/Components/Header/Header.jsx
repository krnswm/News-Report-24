import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../Assets/NewsLogo.png';
import { IoSearchOutline } from "react-icons/io5";
import { SearchContext } from '../../Context/SearchContext';
import './Header.css';

const Header = () => {
    const {searchQuery, setSearchQuery} = useContext(SearchContext);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const handleSearchCahnge = (event) => {
        setSearchQuery(event.target.value)
    }

    const toggleSearchBar = () => {
        setIsSearchVisible(prevState => !prevState)
    }

  return (
    <div className='header-container'>
        <div className='header-items'>
            <div className='together'>
                <Link to={"/"}>
                    <img src={logo} alt='News Logo' className='logo' title="News Report 24"/>
                </Link>
                <nav className='navbar'>
                    <ul>
                        <li><Link to={'/top-headlines'} className='top-headlines options'>Top Headlines</Link></li>
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
                <input type='text' placeholder='Search...' value={searchQuery} onChange={handleSearchCahnge} className = {`search-bar ${isSearchVisible ? 'visible' : ''}`}/>
                <IoSearchOutline className='search-icon' title='search' onClick={toggleSearchBar}/>
            </div>
        </div>
    </div>
  )
}

export default Header