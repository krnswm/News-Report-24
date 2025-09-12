// api/news.js
export default async function handler(req, res) {
  try {
    const { endpoint = "top-headlines", ...query } = req.query;

    // Prevent client from overriding apiKey
    const params = new URLSearchParams(query);
    params.set("apiKey", process.env.NEWS_API_KEY);

    const url = `${process.env.NEWS_API_BASE_URL}/${endpoint}?${params.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching news" });
  }
}
