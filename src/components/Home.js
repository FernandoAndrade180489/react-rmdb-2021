import React, { useState, useEffect } from 'react';
// API
import API from '../API';
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components

// Hook

// Image
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    // function for loading Data from API called by useEffect Rooker
    const fetchMovies = async (page, searchTerm = "") => {
        try {
          setError(false);
          setLoading(true);

          const movies =  await API.fetchMovies(searchTerm, page)
          // console.log(movies);

          setState(prev => ({
              ...movies,
              results:
                page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
          }))
        } catch (error) {
          setError(true);
        }
        setLoading(false);
    };

    // Inicial render
    useEffect(() => {
        fetchMovies(1); // Call function fetchMovies
    }, [])

    console.log(state);

    return <div>Home Page</div>
}

export default Home;