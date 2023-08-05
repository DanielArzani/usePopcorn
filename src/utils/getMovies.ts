import { SearchResponse } from '../types/SearchResponse';

/**
 * An HTTP request for getting a list of movies of MovieType.
 * @param url The URL to pass into the HTTP Request
 */
export default async function getMovies(url: string) {
  try {
    const res = await fetch(url);
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
    console.error('Error fetching data: ', error);
  }
}
