import { useState, useEffect, useRef } from "react";
// API
import API from "../API";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm)

  // function for loading Data from API called by useEffect Rooker
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);
      // console.log(movies);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Inicial render
  useEffect(() => {
    fetchMovies(1); // Call function fetchMovies
  }, []);

  return { state, loading, error, setSearchTerm }; // It returns { state:state ... } key with same name of value
};
