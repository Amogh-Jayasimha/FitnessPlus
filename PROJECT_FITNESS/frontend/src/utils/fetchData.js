const REACT_APP_RAPID_API_KEY = 'e70fd37ff5msh3800396f4e214fdp1d20e9jsn1b5952aec87e';
const CAL_KEY = "YgLTaHNvkKTQgNGIDyMR/A==pgacTbJkn320ONeR";

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || REACT_APP_RAPID_API_KEY,
  },
};

export const calorieOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || REACT_APP_RAPID_API_KEY,
    //'X-RapidAPI-Host': 'https://api.calorieninjas.com',
    'X-Api-Key' : CAL_KEY
  }
};
export const bmiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || REACT_APP_RAPID_API_KEY,
  },
};

export const motivationQuoteOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'motivation-quotes4.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || REACT_APP_RAPID_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
