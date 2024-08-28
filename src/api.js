// src/api.js
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchMoviesByTitle = async (title) => {
    const response = await fetch(`http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`);
    return response.json();
};

export const fetchMovieDetails = async (id) => {
    const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
    return response.json();
};

// Example of fetching movies based on a general keyword search, assuming "upcoming" refers to a search term
export const fetchUpcomingMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=upcoming&apikey=${API_KEY}`);
    return response.json();
};

// You can customize the above function based on how you want to fetch upcoming movies,
// OMDb does not specifically categorize "upcoming" movies, so a search term or different criteria might be used.
