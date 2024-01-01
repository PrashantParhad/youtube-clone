export const LOGO =
  "https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg";

const API_KEY = "AIzaSyA9oriVSqpQPluruB_nFWb7unr-rPoH0tk";
export const GET_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=50&key=" +
  [API_KEY];

export const SEARCH_TEXT =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const COMMENTS = `https://www.googleapis.com/youtube/v3/commentThreads?key=+${API_KEY}+&textFormat=plainText&part=snippet&videoId=`;
