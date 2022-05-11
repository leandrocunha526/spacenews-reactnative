import axios from "axios";

const api = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3",
});

export default api;
