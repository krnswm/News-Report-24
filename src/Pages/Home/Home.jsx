import React, { useContext, useState } from 'react';
import './Home.css';
import { NewsContext } from '../../Context/NewsContext';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const { data } = useContext(NewsContext);
  const [displayedCount, setDisplayedCount] = useState(6);

  if (!data) return (
    <div className='loading-container'>
      <div className='loading-indicator'></div>
    </div>
  );

  const articlesWithImages = data.articles.filter(article => article.urlToImage);
  
  const loadMoreData = () => {
    setDisplayedCount(prevCount => Math.min(prevCount + 6, articlesWithImages.length))
  }

  return (
    <div className='container'>
      <div className='masonry'>
        <InfiniteScroll
          dataLength = {displayedCount}
          next = {loadMoreData}
          hasMore = {displayedCount < articlesWithImages.length}
          loader={<h4 style={{ textAlign: 'center', padding: '20px 0' }}>Loading...</h4>}
        >
          <div className = 'masonry-container'>
            {articlesWithImages.slice(0, displayedCount).map((article, index) => (
              <article key={index} className='masonry-item'>
                <img src={article.urlToImage} alt={article.title} className='card-image' />
                <div className='card-content'>
                  <h3 className='card-title'>{article.title}</h3>
                  <p className='card-description'>{article.description}</p>
                </div>
              </article>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
