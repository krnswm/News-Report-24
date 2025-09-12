import React, { useContext, useState, useEffect } from 'react';
import './Category.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';

const Category = () => {
    const { categoryid } = useParams();
    const { searchQuery } = useContext(SearchContext);
    const [localCategory, setLocalCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(() => {
        const fetchCategoryData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/news?endpoint=top-headlines/sources&category=${categoryid}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setLocalCategory(data.sources)
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [categoryid])

    if (loading) return (
        <div className='loading-container'>
            <div className='loading-indicator'></div>
        </div>
    )

    const filteredCategory = localCategory.filter(source =>
        source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        source.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const loadMoreItems = () => {
        setVisibleItems(prevVisibleItems =>
            Math.min(prevVisibleItems + 10, filteredCategory.length)
        );
    };

    return (
        <div className='main-category'>
            <InfiniteScroll
                dataLength={visibleItems}
                next={loadMoreItems}
                hasMore={visibleItems < filteredCategory.length}
                loader={<h4 style={{ textAlign: 'center', padding: '20px 0' }}>Loading...</h4>}
                endMessage={<div className='no-results-category' onClick={() => window.scroll(0, 0)}>Back to Top...</div>}
            >
                <div className='category-container'>
                    <h1 className='category-heading'>{categoryid}</h1>
                    {filteredCategory.slice(0, visibleItems).map((source) => (
                        <div key={source.id} className='category-item'>
                            <div className='headlines-category'>{source.name}</div>
                            <h2 className='category-description'>
                                <a href={source.url} className='category-title-link' target="_blank" rel="noopener noreferrer">{source.description}</a>
                            </h2>
                            <div className='category-more'>
                                To dig deeper <a href={source.url} className='category-know-link' target="_blank" rel="noopener noreferrer">Click Here</a>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default Category