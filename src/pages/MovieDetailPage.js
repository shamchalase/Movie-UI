import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VFW from '../images/VFW.jpg'
import img1 from '../images/im1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img8 from '../images/img8.jpg';
import img9 from '../images/iimg1.jpg';
import img10 from '../images/img10.png';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.png';
import img13 from '../images/img13.webp';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
const movieData = [
    {
        id: 1,
        title: 'Inception',
        poster_path: VFW,
        overview: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
        
        rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
    },
    {
        id: 2,
        title: 'Avatar',
        poster_path: img4,
        overview: 'A paraplegic Marine dispatched to the moon Pandora...',
        rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
    },
    {
      id: 3,
      title: 'No Time to Die',
      poster_path: img1,
      overview: 'James Bond has left active service. His peace is short-lived...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 4,
      title: 'Dune',
      poster_path: VFW,
      overview: 'Feature adaptation of Frank Herbert’s science fiction novel...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 5,
      title: 'The Suicide Squad',
      poster_path: img3,
      overview: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of cons...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 6,
      title: 'Shang-Chi',
      poster_path: img5,
      overview: 'Shang-Chi must confront the past he thought he left behind...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 7,
      title: 'Eternals',
      poster_path: img4,
      overview: 'The saga of the Eternals, a race of immortal beings...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 8,
      title: 'Spider-Man: No Way Home',
      poster_path: img1,
      overview: 'Peter Parker’s life and reputation are turned upside down...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 9,
      title: 'Matrix Resurrections',
      poster_path: img2,
      overview: 'Return to a world of two realities: one, everyday life; the other, what lies behind it...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 10,
      title: 'Ghostbusters: Afterlife',
      poster_path: img6,
      overview: 'When a single mom and her two kids arrive in a small town...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 11,
      title: 'Free Guy',
      poster_path: img2,
      overview: 'A bank teller discovers that he’s actually a background player in an open-world video game...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 12,
      title: 'The King’s Man',
      poster_path: img5,
      overview: 'In the early years of the 20th century, the Kingsman agency is formed...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 13,
      title: 'Jungle Cruise',
      poster_path: img1,
      overview: 'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 14,
      title: 'Venom: Let There Be Carnage',
      poster_path: img4,
      overview: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 15,
      title: 'The French Dispatch',
      poster_path: VFW,
      overview: 'A love letter to journalists set in an outpost of an American newspaper...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 16,
      title: 'Top Gun: Maverick',
      poster_path: img2,
      overview: 'After more than thirty years of service as one of the Navy’s top aviators...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 17,
      title: 'Morbius',
      poster_path: VFW,
      overview: 'Biochemist Michael Morbius tries to cure himself of a rare blood disease...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 18,
      title: 'Last Night in Soho',
      poster_path: img6,
      overview: 'A young girl, passionate about fashion design, is mysteriously able to enter the 1960s...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 19,
      title: 'The Green Knight',
      poster_path: img1,
      overview: 'A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 20,
      title: 'The Tomorrow War',
      poster_path: img3,
      overview: 'A man is drafted to fight in a future war where the fate of humanity relies on his ability...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
    {
        id: 2,
        title: 'Avatar',
        poster_path: img3,
        overview: 'A paraplegic Marine dispatched to the moon Pandora...',
        rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
    },
    {
      id: 3,
      title: 'No Time to Die',
      poster_path: img4,
      overview: 'James Bond has left active service. His peace is short-lived...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 4,
      title: 'Dune',
      poster_path: VFW,
      overview: 'Feature adaptation of Frank Herbert’s science fiction novel...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 5,
      title: 'The Suicide Squad',
      poster_path: img2,
      overview: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of cons...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 6,
      title: 'Shang-Chi',
      poster_path: img4,
      overview: 'Shang-Chi must confront the past he thought he left behind...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 7,
      title: 'Eternals',
      poster_path: img5,
      overview: 'The saga of the Eternals, a race of immortal beings...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 8,
      title: 'Spider-Man: No Way Home',
      poster_path: img4,
      overview: 'Peter Parker’s life and reputation are turned upside down...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 9,
      title: 'Matrix Resurrections',
      poster_path: img6,
      overview: 'Return to a world of two realities: one, everyday life; the other, what lies behind it...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 10,
      title: 'Ghostbusters: Afterlife',
      poster_path: VFW,
      overview: 'When a single mom and her two kids arrive in a small town...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 11,
      title: 'Free Guy',
      poster_path: img2,
      overview: 'A bank teller discovers that he’s actually a background player in an open-world video game...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 12,
      title: 'The King’s Man',
      poster_path: img4,
      overview: 'In the early years of the 20th century, the Kingsman agency is formed...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 13,
      title: 'Jungle Cruise',
      poster_path: img2,
      overview: 'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 14,
      title: 'Venom: Let There Be Carnage',
      poster_path: VFW,
      overview: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 15,
      title: 'The French Dispatch',
      poster_path: img1,
      overview: 'A love letter to journalists set in an outpost of an American newspaper...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 16,
      title: 'Top Gun: Maverick',
      poster_path: img6,
      overview: 'After more than thirty years of service as one of the Navy’s top aviators...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 17,
      title: 'Morbius',
      poster_path: VFW,
      overview: 'Biochemist Michael Morbius tries to cure himself of a rare blood disease...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 18,
      title: 'Last Night in Soho',
      poster_path: img5,
      overview: 'A young girl, passionate about fashion design, is mysteriously able to enter the 1960s...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 19,
      title: 'The Green Knight',
      poster_path: img3,
      overview: 'A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
      id: 20,
      title: 'The Tomorrow War',
      poster_path: img4,
      overview: 'A man is drafted to fight in a future war where the fate of humanity relies on his ability...',
      rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
  },
  {
    id: 61,
    title: 'Inception',
    poster_path: VFW,
    overview: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 62,
    title: 'Avatar',
    poster_path: img3,
    overview: 'A paraplegic Marine dispatched to the moon Pandora...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 63,
    title: 'No Time to Die',
    poster_path: img6,
    overview: 'James Bond has left active service. His peace is short-lived...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 64,
    title: 'Dune',
    poster_path: img1,
    overview: 'Feature adaptation of Frank Herbert’s science fiction novel...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 65,
    title: 'The Suicide Squad',
    poster_path: img2,
    overview: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of cons...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 66,
    title: 'Shang-Chi',
    poster_path: img6,
    overview: 'Shang-Chi must confront the past he thought he left behind...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 67,
    title: 'Eternals',
    poster_path: img4,
    overview: 'The saga of the Eternals, a race of immortal beings...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 68,
    title: 'Spider-Man: No Way Home',
    poster_path: img5,
    overview: 'Peter Parker’s life and reputation are turned upside down...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 69,
    title: 'Matrix Resurrections',
    poster_path: img1,
    overview: 'Return to a world of two realities: one, everyday life; the other, what lies behind it...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 70,
    title: 'Ghostbusters: Afterlife',
    poster_path: VFW,
    overview: 'When a single mom and her two kids arrive in a small town...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 71,
    title: 'Free Guy',
    poster_path: img6,
    overview: 'A bank teller discovers that he’s actually a background player in an open-world video game...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 72,
    title: 'The King’s Man',
    poster_path: img3,
    overview: 'In the early years of the 20th century, the Kingsman agency is formed...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 73,
    title: 'Jungle Cruise',
    poster_path: img2,
    overview: 'Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 74,
    title: 'Venom: Let There Be Carnage',
    poster_path: VFW,
    overview: 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 75,
    title: 'The French Dispatch',
    poster_path: img6,
    overview: 'A love letter to journalists set in an outpost of an American newspaper...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 76,
    title: 'Top Gun: Maverick',
    poster_path: VFW,
    overview: 'After more than thirty years of service as one of the Navy’s top aviators...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 77,
    title: 'Morbius',
    poster_path: img5,
    overview: 'Biochemist Michael Morbius tries to cure himself of a rare blood disease...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 78,
    title: 'Last Night in Soho',
    poster_path: img1,
    overview: 'A young girl, passionate about fashion design, is mysteriously able to enter the 1960s...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 79,
    title: 'The Green Knight',
    poster_path: img4,
    overview: 'A fantasy re-telling of the medieval story of Sir Gawain and the Green Knight...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
{
    id: 80,
    title: 'The Tomorrow War',
    poster_path: img3,
    overview: 'A man is drafted to fight in a future war where the fate of humanity relies on his ability...',
    rating: 8.3, // Rating out of 10
    releaseDate: '2022-03-04',
},
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
},
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
   
];

const MovieDetailPage = () => {
    const { id } = useParams();
    const movie = movieData.find((movie) => movie.id === parseInt(id));

    if (!movie) return <p>Movie not found.</p>;

    return (
        <div style={styles.container}>
            <img src={movie.poster_path} alt={movie.title} style={styles.image} />
            <h1 style={styles.title}>{movie.title}</h1>
            <p style={styles.rating}>Rating:- {movie.rating}</p>
            <p style={styles.releaseDate}>Release Date:-{movie.releaseDate}</p>
            <p style={styles.overview}>{movie.overview}</p>

        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f4',
    },
    image: {
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2em',
        color: '#333',
        margin: '20px 0 10px',
        textAlign: 'center',
    },
    overview: {
        fontSize: '1em',
        color: '#666',
        textAlign: 'center',
        maxWidth: '400px',
    },
      releaseDate: {
        // padding: '0 2px 2px',
        fontSize: '0.9em',
        color: 'red',
    },
    rating:{
        // padding: '0 2px 2px',
        fontSize: '0.9em',
        color: '#666',
    }
};

export default MovieDetailPage;
