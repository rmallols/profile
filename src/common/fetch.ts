const fetchData = async (url: string) => {
    const response = await fetch(url);
    return response.ok ?
        response.json() :
        Promise.reject();
};

export default fetchData;