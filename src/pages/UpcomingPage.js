import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import img8 from '../images/img8.jpg';
import img9 from '../images/iimg1.jpg';
import img10 from '../images/img10.png';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.png';
import img13 from '../images/img13.webp';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
// Import more images as needed

const UpcomingPage = () => {
    const [movies] = useState([
        {
            id: 11,
            title: 'Inception',
            poster_path: img8,
            overview: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 12,
            title: 'Avatar',
            poster_path: img9,
            overview: 'A paraplegic Marine dispatched to the moon Pandora...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 13,
            title: 'No Time to Die',
            poster_path: img10,
            overview: 'James Bond has left active service. His peace is short-lived...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 14,
            title: 'Dune',
            poster_path: img11,
            overview: 'Feature adaptation of Frank Herbert’s science fiction novel...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 15,
            title: 'The Suicide Squad',
            poster_path: img12,
            overview: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of cons...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 16,
            title: 'Shang-Chi',
            poster_path: img13,
            overview: 'Shang-Chi must confront the past he thought he left behind...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 17,
            title: 'Eternals',
            poster_path: img14,
            overview: 'The saga of the Eternals, a race of immortal beings...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 18,
            title: 'Spider-Man: No Way Home',
            poster_path: img15,
            overview: 'Peter Parker’s life and reputation are turned upside down...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        
    ]);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Upcoming Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f0f0f0',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    },
    movieList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    movieItem: {
        backgroundColor: '#fff',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    image: {
        maxWidth: '300px',
        height: 'auto',
        borderBottom: '1px solid #ddd',
    },
    title: {
        fontSize: '1.2em',
        margin: '10px 0',
        color: '#333',
    },
    overview: {
        padding: '0 10px 10px',
        fontSize: '0.9em',
        color: '#666',
    },
};

export default UpcomingPage;
