export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.EXERCISEDB_API_KEY,
        'X-RapidAPI-Host': process.env.EXERCISEDB_API_HOST
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}