import apiUrl from '../apiConfig'
import axios from 'axios'

// Index for homepage
export const beerIndex = () => {
  return axios({
    url: apiUrl + '/beers?per_page=9&?page=1',
    method: 'GET'
  })
}

// beer search
export const searchBeer = (searchFor) => {
  return axios({
    url: apiUrl + '/beers?beer_name=' + searchFor,
    method: 'GET'
  })
}

// FindOne Beer
export const oneBeer = (id) => {
  return axios({
    url: apiUrl + '/beers/' + id,
    method: 'GET'
  })
}

// Get Random Beer
export const randoBeer = () => {
  return axios({
    url: apiUrl + '/beers/random',
    method: 'GET'
  })
}
