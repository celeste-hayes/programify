const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";
const CONTENTFUL_API_URL = "https://cdn.contentful.com/spaces/YOUR_SPACE_ID/environments/master/entries";
const GITHUB_API_URL = "https://api.github.com/search/repositories";

// Fetch GitHub Resources
export const fetchGitHubResources = async () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN; // Public token
  const response = await fetch(`${GITHUB_API_URL}?q=topic:programming`, {
    headers: { Authorization: `token ${token}` },
  });
  const data = await response.json();
  return data.items.slice(0, 5).map((item) => ({
    href: item.html_url,
    thumbnail: "https://via.placeholder.com/150", // Replace with a GitHub image if desired
    tag: "GitHub",
    title: item.name,
  }));
};

// Fetch YouTube Resources
export const fetchYouTubeResources = async () => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const response = await fetch(
    `${YOUTUBE_API_URL}?part=snippet&q=programming&type=video&maxResults=5&key=${apiKey}`
  );
  const data = await response.json();
  return data.items.map((item) => ({
    href: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    thumbnail: item.snippet.thumbnails.default.url,
    tag: "YouTube",
    title: item.snippet.title,
  }));
};

// Fetch Contentful Resources
export const fetchContentfulResources = async () => {
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
  const response = await fetch(`${CONTENTFUL_API_URL}?access_token=${accessToken}`);
  const data = await response.json();
  return data.items.slice(0, 5).map((item) => ({
    href: item.fields.url,
    thumbnail: item.fields.thumbnail || "https://via.placeholder.com/150",
    tag: "Contentful",
    title: item.fields.title,
  }));
};

// Fetch All Resources
export const fetchAllResources = async () => {
  const github = await fetchGitHubResources();
  const youtube = await fetchYouTubeResources();
  const contentful = await fetchContentfulResources();
  return [...github, ...youtube, ...contentful];
};
