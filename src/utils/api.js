import axios from 'axios';
import {getAccessToken} from '../utils/common';

const API_URL = 'http://localhost:9090/api';

axios.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`

export const getCompanies = () => {
    return axios.get(`${API_URL}/companies`);
}

export const getCompany = (id) => {
    return axios.get(`${API_URL}/companies/${id}`);
}

export const updateCompany = (id, data) => {
    return axios.put(`${API_URL}/companies/${id}`, data);
}

export const getCompanyOffers = (id) => {
    return axios.get(`${API_URL}/companies/${id}/offers`);
}