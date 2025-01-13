let env = {};
const DEAFAULT_YOUTUBE_API_KEY = 'AIzaSyBFhvSSw7mRvF1P8biweSFotszKySovOMY';

const fetchEnvVariables = async () => {
  if (Object.keys(env).length === 0) {
    try {
      const response = await fetch('http://localhost:3001/env');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      env = await response.json();
      console.log("Fetched environment variables:", env);
    } catch (error) {
      console.error("Error fetching environment variables:", error);
    }
  }
};

export const fetchYouTubeResources = async (category = "") => {
  await fetchEnvVariables();
  const apiKey = env.VITE_YOUTUBE_API_KEY || DEAFAULT_YOUTUBE_API_KEY;

  if (!apiKey) {
    console.error("YouTube API key is missing! Add VITE_YOUTUBE_API_KEY to your .env file.");
    return [];
  }

  console.log(`Using YouTube API key: ${apiKey}`);

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${category}&type=video&maxResults=5&key=${apiKey}`
    );
    if (!response.ok) {
      console.error(`YouTube API Error: ${response.status} ${response.statusText}`);
      return [];
    }
    const data = await response.json();
    if (!data.items) {
      console.warn("No YouTube videos found for the given query.");
      return [];
    }
    return data.items.map((item) => ({
      href: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      thumbnail: item.snippet.thumbnails.default.url,
      tag: "YouTube",
      title: item.snippet.title,
    }));
  } catch (error) {
    console.error("Error fetching YouTube resources:", error);
    return [];
  }
};
