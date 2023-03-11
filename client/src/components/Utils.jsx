export const handlePostFetch = async (route, jsonData) => {
    let url = process.env.REACT_APP_SERVER_URL + route;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error)
        return error;
    }
}
