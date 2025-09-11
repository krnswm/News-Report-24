import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css';
import { NewsContext } from '../../Context/NewsContext';

const NewsDetail = () => {
    const { id } = useParams();
    const { data } = useContext(NewsContext);

    if (!data) return <div>Loading...</div>
    
    const findArticleByTitle = (id) => {
        return data.articles.find(article => article.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-') === id);
    }

    const article = findArticleByTitle(id)

    const formateDate = (dateStr) => {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'short', day: 'numeric'};
        return date.toLocaleDateString('en-US', options);
    }

  return (
    <div className='news-container'>
        <strong className='news-header'>{article.title}</strong>
        <div className = 'news-author'>
            <span>Author: </span>{article?.author || 'Unknown'}
        </div>
        <div className='news-image'>
            <img src={article?.urlToImage} alt={article?.title} className='image-poster' />
            <div className = 'published'><span className='published-date'>Published Date: </span>{formateDate(article?.publishedAt)}</div>
        </div>
        <hr className='newsdetail-hr' />
        <div className='news-content'>
            <div className='news-description'>{article?.description}</div>
            <div className='desc-content'>{article?.content}</div>
        </div>
        <div className='full-news-link'><span className='full-news-header'>To know more about the topic </span><a href={article.url} target='_blank'>Click Here</a></div>
    </div>
  )
}

export default NewsDetail