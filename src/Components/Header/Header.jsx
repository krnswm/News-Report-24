import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/NewsLogo.png';
import { SearchContext } from '../../Context/SearchContext';
import './Header.css';
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

const Header = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isSidebarVisible, setIsSideBarVisible] = useState(false);

    const handleSearchCahnge = (event) => {
        setSearchQuery(event.target.value)
    }

    const toggleSearchBar = () => {
        setIsSearchVisible(prevState => !prevState)
    }

    const toggleSidebar = () => {
        setIsSideBarVisible(prevState => !prevState);
    }

    const closeSidebar = () => {
        if (event.target.classList.contains('sidebar-overlay')) {
            setIsSideBarVisible(false);
        }
    };

    const handleCancelClick = () => {
        event.stopPropagation();
        setIsSideBarVisible(false);
    }

    return (
        <>
            <div className='header-container'>
                <div className='header-items'>
                    <div className='together'>
                        <Link to={"/"}>
                            <img src={logo} alt='News Logo' className='logo' title="News Report 24" />
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
                        <input type='text' placeholder='Search...' value={searchQuery} onChange={handleSearchCahnge} className={`search-bar ${isSearchVisible ? 'visible' : ''}`} />
                        <IoSearchOutline className='search-icon' title='search' onClick={toggleSearchBar} />
                        <GiHamburgerMenu className='hamburger' onClick={toggleSidebar} />
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar-overlay ${isSidebarVisible ? 'visible' : ''}`} onClick={closeSidebar}>
                <div className='sidebar'>
                    <nav className='sidebar-nav'>
                        <ImCancelCircle className='cancel-btn' onClick={handleCancelClick} />
                        <ul className='sidebar-ul'>
                            <li><Link to={'/top-headlines'} className='sidebar-link'>Top Headlines</Link></li>
                            <li><Link to={'/category/business'} className='sidebar-link'>Business</Link></li>
                            <li><Link to={'/category/entertainment'} className='sidebar-link'>Entertainment</Link></li>
                            <li><Link to={'/category/general'} className='sidebar-link'>General</Link></li>
                            <li><Link to={'/category/health'} className='sidebar-link'>Health</Link></li>
                            <li><Link to={'/category/science'} className='sidebar-link'>Science</Link></li>
                            <li><Link to={'/category/sports'} className='sidebar-link'>Sports</Link></li>
                            <li><Link to={'/category/technology'} className='sidebar-link'>Technology</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header