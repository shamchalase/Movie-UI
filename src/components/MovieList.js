import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <div style={styles.movieList}>
            {movies.map((movie) => (
                <div key={movie.id} style={styles.movieItem}>
                    <Link to={`/movie/${movie.id}`}>
                        <img src={movie.poster_path} alt={movie.title} style={styles.image} />
                    </Link>
                    <h2 style={styles.title}>{movie.title}</h2>
                    <h4 style={styles.rating}>{movie.rating}</h4>
                    <h5 style={styles.releaseDate}>{movie.releaseDate}</h5>
                    <p style={styles.overview}>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

const styles = {
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
        maxWidth: '100%',
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
    releaseDate: {
        padding: '0 2px 2px',
        fontSize: '0.9em',
        color: '#666',
    },
    rating:{
        padding: '0 2px 2px',
        fontSize: '0.9em',
        color: '#666',
    }
};

export default MovieList;
