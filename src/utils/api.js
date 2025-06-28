const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const apiKey = "a01a68447f8a438aa702e0e8d297416a"; // Store in .env in real projects

const fetchArticles = (query) => {
  const to = new Date().toISOString().split("T")[0];
  const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  return fetch(
    `${BASE_URL}?q=${encodeURIComponent(
      query
    )}&apiKey=${apiKey}&from=${from}&to=${to}&pageSize=100`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }
    return res.json();
  });
};

export const api = {
  fetchArticles,
  apiKey,
};
