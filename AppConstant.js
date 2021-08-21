export const API__BASE = `https://youtube.googleapis.com/youtube/v3/`;
export const SEARCH__URL = `${API__BASE}search?type=video&part=snippet&maxResults=25&key=${process.env.API_KEY}`

export const VIDEO__URL = `${API__BASE}videos?part=snippet,statistics,status,player&key=${process.env.API_KEY}`
