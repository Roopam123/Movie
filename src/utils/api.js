import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN_KEY;

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN
};

export const fetchDataFromApi = async (url,params)=>{
    try {
        const {data} = await axios.get(`${BASE_URL}`+url,
            {
                headers:headers,
                params:params
        })
        return data
    } catch (error) {
        console.log("error in the fetch fetchDataFromApi function",error);
    };
}