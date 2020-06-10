import axios from 'axios';
import HOSTS from '../hosts';

const api = axios.create({
    baseURL: HOSTS.AMIIBO_RESTFUL_API_URL
}); 

export default api;