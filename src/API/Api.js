const API_Key = "mLIFjBhNGnbPPOTGEvWaDwODSko1"
 const getMatches = () => {
    const url = `https://cricapi.com/api/matches/?apikey=${API_Key}`;
    return fetch(url).then((resp) => resp.json())
    .catch((error) => console.log("Error",error))
};
export default getMatches

// load match details
export const getMatchDetails = (id) => {
    const url = `https://cricapi.com/api/cricketScore/?apikey=${API_Key}&unique_id=${id}`;
    return fetch(url)
    .then(resp => resp.json())
    .catch((error) => console.log(error));
}