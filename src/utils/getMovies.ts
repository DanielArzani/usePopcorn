import { MovieType } from '../types/MovieType';
import { SearchResponse } from '../types/SearchResponse';

/**
 * An HTTP request for getting a list of movies of MovieType.
 * @param url The URL to pass into the HTTP Request
 * @returns {SearchResponse}
 */
export default async function getMovies(url: string) {
  try {
    const res = await fetch(url);

    const data: SearchResponse = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
}
