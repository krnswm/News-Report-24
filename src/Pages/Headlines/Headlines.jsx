import React, { useContext, useState } from 'react';
import './Headlines.css';
import { NewsContext } from '../../Context/NewsContext';
import { SearchContext } from '../../Context/SearchContext';
import InfiniteScroll from 'react-infinite-scroll-component';

const Headlines = () => {
    const { headlines, loading } = useContext(NewsContext);
    const { searchQuery } = useContext(SearchContext);

    const [visibleHeadlines, setVisibleHeadlines] = useState(10);

    if (loading) return (
        <div className='loading-conatiner'>
            <div className='loading-indivator'></div>
        </div>
    )

    const filteredHeadlines = headlines.filter(source => source.name.toLowerCase().includes(searchQuery.toLowerCase()) || source.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadmoreItems = () => {
        setVisibleHeadlines(prevVisibleHeadlines => Math.min(prevVisibleHeadlines + 10, filteredHeadlines.length)
        );
    }

    const displayedHealdines = filteredHeadlines.slice(0, visibleHeadlines);

    return (
        <div className='main-container'>
            <InfiniteScroll dataLength={visibleHeadlines} next={loadmoreItems} hasMore={visibleHeadlines < filteredHeadlines.length} loader={<h4 style={{ textAlign: 'center', padding: '20px 0' }}>Loading...</h4>} endMessage={<div className='no-results-headlines' onClick={() => window.scroll(0, 0)}>Back to Top...</div>}>
                <div className='headlines-container'>
                    <h1 className='headline-heading'>Top Headlines</h1>
                    {displayedHealdines.map((source) => (
                        <div key={source.id} className='headline-item'>
                            <div className='headlines-name'>{source.name}</div>
                            <h2 className='headlines-description'>
                                {source.description}
                            </h2>
                            <div className='know-more'>
                                To dig deeper <a href={source.url} className='know-link' target='_blank'
                                rel='noopener noreferrer'>Click Here</a>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Headlines