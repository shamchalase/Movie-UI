import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav style={styles.nav}>
            <ul style={styles.navList}>
                <li><Link to="/" style={styles.navItem}>Popular</Link></li>
                <li><Link to="/top-rated" style={styles.navItem}>Top Rated</Link></li>
                <li><Link to="/upcoming" style={styles.navItem}>Upcoming</Link></li>
                <li>
                    <form onSubmit={handleSearch} style={styles.form}>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={styles.searchInput}
                        />
                        <button type="submit" style={styles.searchButton}>Go</button>
                    </form>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    navList: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    navItem: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
    },
    searchInput: {
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginRight: '5px',
    },
    searchButton: {
        padding: '5px 10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#f00',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default Navbar;
