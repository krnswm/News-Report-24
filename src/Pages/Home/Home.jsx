import React, { useContext } from 'react';
import './Home.css';
import { NewsContext } from '../Context/NewsContext';

const Home = () => {
  const { data } = useContext(NewsContext);

  if (!data) return (
    <div className='loading-container'>
      <div className='loading-indicator'></div>
    </div>
  );

  const articlesWithImages = data.articles.filter(article => article.urlToImage);

  return (
    <div className='container'>
      <div className='masonry'>
        {articlesWithImages.map((article, index) => (
          <article key={index} className='masonry-item'>
            <img src={article.urlToImage} alt={article.title} className='card-image' />
            <div className='card-content'>
              <h3 className='card-title'>{article.title}</h3>
              <p className='card-description'>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
