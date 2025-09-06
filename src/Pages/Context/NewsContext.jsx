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
                const response = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=d983082ba3a1457cbd74e2e4886af9e2');
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
            const url = "https://newsapi.org/v2/everything?q=everything&apiKey=d983082ba3a1457cbd74e2e4886af9e2";
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