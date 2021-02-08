let apiUrl
const apiUrls = {
  production: 'https://api.punkapi.com/v2',
  development: 'https://api.punkapi.com/v2'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
