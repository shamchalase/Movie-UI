import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchResultsPage from './pages/SearchResultsPage'; // Import the SearchResultsPage
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/top-rated" element={<TopRatedPage />} />
                <Route path="/upcoming" element={<UpcomingPage />} />
                <Route path="/movie/:id" element={<MovieDetailPage />} />
                <Route path="/search" element={<SearchResultsPage />} /> {/* Search route */}
            </Routes>
        </Router>
    );
};

export default App;
