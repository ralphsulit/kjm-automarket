const axios = require('axios');
  
export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '2b42c0efffmsh4af0ccd2dc3abc7p1e62fcjsn58b0fd04f8c7',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await axios('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  return response.data;
}
