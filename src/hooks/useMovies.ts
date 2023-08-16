import React, { useState, useEffect } from 'react';

import getMovies from '../utils/getMovies';

import { Loading } from '../types/LoadingTypes';
import { MovieType } from '../types/MovieType';

/**
 * A custom hook for fetching movies from the OMBD API, setting the loadingState and cleaning up the excess network requests
 * @param query The query string used to search for a movie title
 * @param key The API Key for the fetch request to the OMBD API
 */
export default function useMovies(
  query: string,
  key: string
): [MovieType[], Loading] {
  const [movies, setMovies] = useState<MovieType[]>([]); // Holds the list of all movies
  const [loading, setLoading] = useState<Loading>('nothing');

  // Fetching the movie data on search query and setting loading states
  useEffect(() => {
    // Create an abort controller for cleaning up the excess network requests (in order to prevent a race condition)
    const controller = new AbortController();

    if (query === '') setLoading('nothing');

    // No movies will show up with only 2 letters so no point is querying for them at that point
    if (query.length >= 3) {
      if (query !== '') {
        // Only perform the API call when query is not an empty string
        setLoading('loading'); // Set loading to true at the start of an API call

        // GET movies from OMBD API
        const url = `https://www.omdbapi.com/?apikey=${key}&s=${query}`;

        const moviesResultsPromise = getMovies(url, controller);

        (async () => {
          const data = await moviesResultsPromise;
          if (data !== undefined) {
            setLoading('success');
            setMovies(data.Search);
          } else {
            setLoading('failure');
          }
        })();
      }
    }

    return () => {
      controller.abort();
    };
  }, [query]);
  return [movies, loading];
}
