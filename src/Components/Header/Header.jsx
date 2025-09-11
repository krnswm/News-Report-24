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
                        <Link to={'category/general'} className='general options'>General</Link>
                        <Link to={'category/business'} className='business options'>Business</Link>
                        <Link to={'category/entertainment'} className='entertainment options'>Entertainment</Link>
                        <Link to={'category/health'} className='health options'>Health</Link>
                        <Link to={'category/science'} className='science options'>Science</Link>
                        <Link to={'category/sports'} className='sports options'>Sports</Link>
                        <Link to={'category/technology'} className='technology options'>Technology</Link>
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