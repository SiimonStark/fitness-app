export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_EXERCISEDB_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_YOUTUBE_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

export const fetchData = async (url, options) => {
    console.log('hello world')
    console.log(process.env);

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}