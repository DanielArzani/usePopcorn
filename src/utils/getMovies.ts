import { SearchResponse } from '../types/SearchResponse';

/**
 * An HTTP request for getting a list of movies of MovieType.
 * @param url The URL to pass into the HTTP Request
 * @param abortController Part of the native browser api, for cleaning up the excess network requests
 */
export default async function getMovies(
  url: string,
  abortController: AbortController
) {
  try {
    const res = await fetch(url, { signal: abortController.signal });
    const data: SearchResponse = await res.json();

    // When the movie search returns no results, the OMDb API returns
    // { "Response":"False", "Error":"Movie not found!" }
    if (data.Response === 'False') {
      // Return an empty array if no movies are found
      return { Response: 'True', Search: [], totalResults: '0' };
    } else {
      return data;
    }
  } catch (error: unknown) {
    if (error instanceof Error && error.name !== 'AbortError') {
      throw new FetchMoviesError(`Error fetching data: ${error.message}`);
    }
  }
}

class FetchMoviesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FetchMoviesError';
  }
}
