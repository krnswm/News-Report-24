import React, { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch sources (headlines)
  useEffect(() => {
    const fetchSources = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/news?endpoint=top-headlines/sources`);
        const json = await response.json();
        setHeadlines(json.sources || []);
      } catch (error) {
        console.error("Error fetching sources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSources();
  }, []);

  // Fetch "everything"
  useEffect(() => {
    const fetchEverything = async () => {
      try {
        const response = await fetch(`/api/news?endpoint=everything&q=everything`);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching everything:", error.message);
      }
    };
    fetchEverything();
  }, []);

  return (
    <NewsContext.Provider value={{ data, headlines, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
