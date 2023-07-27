import axios from "axios";

export const getTokenCrfs = () => {
    axios.defaults.withCredentials = true;
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
}