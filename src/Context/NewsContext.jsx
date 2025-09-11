import React, {createContext, useState, useEffect} from 'react'

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [headlines, setHeadlines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/top-headlines/sources?apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
                const data = await response.json();
                setHeadlines(data.sources);
            } catch (error) {
                console.error('Error Fetching Headlines:',error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const url = `${import.meta.env.VITE_API_BASE_URL}/everything?q=everything&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchData();
    }, []);
    
    return (
        <NewsContext.Provider value={{ data, headlines, loading}}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsProvider