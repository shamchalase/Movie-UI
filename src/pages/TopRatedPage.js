import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import VFW from '../images/VFW.jpg'
import img1 from '../images/im1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
// import img5 from '../images/img5.jpg'
const TopRatedPage = () => {
    const [movies] = useState([
      
        {
            id: 31,
            title: 'Inception',
            poster_path: VFW,
            overview: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 32,
            title: 'Avatar',
            poster_path: img3,
            overview: 'A paraplegic Marine dispatched to the moon Pandora...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 33,
            title: 'No Time to Die',
            poster_path: img5,
            overview: 'James Bond has left active service. His peace is short-lived...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 34,
            title: 'Dune',
            poster_path: img1,
            overview: 'Feature adaptation of Frank Herbert’s science fiction novel...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 35,
            title: 'The Suicide Squad',
            poster_path: img2,
            overview: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of cons...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 36,
            title: 'Shang-Chi',
            poster_path: img5,
            overview: 'Shang-Chi must confront the past he thought he left behind...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 37,
            title: 'Eternals',
            poster_path: img4,
            overview: 'The saga of the Eternals, a race of immortal beings...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 38,
            title: 'Spider-Man: No Way Home',
            poster_path: img5,
            overview: 'Peter Parker’s life and reputation are turned upside down...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 39,
            title: 'Matrix Resurrections',
            poster_path: img1,
            overview: 'Return to a world of two realities: one, everyday life; the other, what lies behind it...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 40,
            title: 'Ghostbusters: Afterlife',
            poster_path: VFW,
            overview: 'When a single mom and her two kids arrive in a small town...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 41,
            title: 'Free Guy',
            poster_path: img5,
            overview: 'A bank teller discovers that he’s actually a background player in an open-world video game...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 42,
            title: 'The King’s Man',
            poster_path: img3,
            overview: 'In the early years of the 20th century, the Kingsman agency is formed...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 43,
            title: 'Jungle Cruise',
            poster_path: img2,
            overview: 'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 44,
            title: 'Venom: Let There Be Carnage',
            poster_path: VFW,
            overview: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 45,
            title: 'The French Dispatch',
            poster_path: img5,
            overview: 'A love letter to journalists set in an outpost of an American newspaper...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 46,
            title: 'Top Gun: Maverick',
            poster_path: VFW,
            overview: 'After more than thirty years of service as one of the Navy’s top aviators...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 47,
            title: 'Morbius',
            poster_path: img5,
            overview: 'Biochemist Michael Morbius tries to cure himself of a rare blood disease...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 48,
            title: 'Last Night in Soho',
            poster_path: img1,
            overview: 'A young girl, passionate about fashion design, is mysteriously able to enter the 1960s...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 49,
            title: 'The Green Knight',
            poster_path: img4,
            overview: 'A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        },
        {
            id: 50,
            title: 'The Tomorrow War',
            poster_path: img3,
            overview: 'A man is drafted to fight in a future war where the fate of humanity relies on his ability...',
            rating: 8.3, // Rating out of 10
            releaseDate: '2022-03-04',
        }
    
    ,
        // Add more top-rated movie objects here
    ]);

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Top Rated Movies</h1>
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

export default TopRatedPage;
