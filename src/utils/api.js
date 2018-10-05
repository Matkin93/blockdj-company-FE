import axios from 'axios';
import {getAccessToken} from '../utils/common';

const API_URL = 'http://localhost:9090/api';

axios.defaults.headers.common['Authorization'] = `Bearer ${getAccessToken()}`

// GET /companies (1)
export const getCompanies = () => {
    return axios.get(`${API_URL}/companies`);
}

// GET /companies/:company_id (2)
export const getCompany = (company_id) => {
    return axios.get(`${API_URL}/companies/${company_id}`);
}

// PUT /companies/:company_id (3)
export const updateCompany = (company_id, data) => {
    return axios.put(`${API_URL}/companies/${company_id}`, data);
}

// GET /companies/:company_id/playlists (4)
export const getCompanyPlaylists = (company_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/playlists`);
}

// GET /companies/:company_id/playlists/:playlist_id (11)
export const getPlaylist = (company_id, playlist_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/playlists/${playlist_id}`);
}

// POST /companies/:company_id/playlists (5)
export const addCompanyPlaylist = (company_id, data) => {
    return axios.post(`${API_URL}/companies/${company_id}/playlists`, data);
}

// GET /companies/:company_id/playlists/:playlist_id/tracks (6)
export const getPlaylistTracks = (company_id, playlist_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/playlists/${playlist_id}/tracks`);
}

// POST /companies/:company_id/playlists/:playlist_id/tracks (7)
export const addPlaylistTrack = (company_id, playlist_id, data) => {
    return axios.post(`${API_URL}/companies/${company_id}/playlists/${playlist_id}/tracks`, data);
}

// GET /companies/:company_id/playlists/:playlist_id/tracks/:track_id (8)
export const getPlaylistTrack = (company_id, playlist_id, track_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/playlists/${playlist_id}/tracks/${track_id}`);
}

// PUT /companies/:company_id/playlists/:playlist_id/tracks/:track_id (9)
export const updatePlaylistTrack = (company_id, playlist_id, track_id, data) => {
    return axios.put(`${API_URL}/companies/${company_id}/playlists/${playlist_id}/tracks/${track_id}`, data);
}

// DELETE /companies/:company_id/playlists/:playlist_id/tracks/:track_id (10)
export const deletePlaylistTrack = (company_id, playlist_id, track_id) => {
    return axios.delete(`${API_URL}/companies/${company_id}/playlists/${playlist_id}/tracks/${track_id}`);
}

// PUT /companies/:company_id/playlists/:playlist_id (12)
export const updatePlaylist = (company_id, playlist_id) => {
    return axios.put(`${API_URL}/companies/${company_id}/playlists/${playlist_id}`);
}

// DELETE /companies/:company_id/playlists/:playlist_id (13)
export const deletePlaylist = (company_id, playlist_id) => {
    return axios.delete(`${API_URL}/companies/${company_id}/playlists/${playlist_id}`);
}

// GET /companies/:company_id/offers (14)
export const getCompanyOffers = (company_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/offers`);
}

// POST /companies/:company_id/offers (15)
export const addCompanyOffer = (company_id) => {
    return axios.post(`${API_URL}/companies/${company_id}/offers`);
}

// GET /companies/:company_id/offers/:offer_id (16)
export const getCompanyOffer = (company_id, offer_id) => {
    return axios.get(`${API_URL}/companies/${company_id}/offers/${offer_id}`);
}

// PUT /companies/:company_id/offers/:offer_id
export const updateCompanyOffer = (company_id, offer_id, data) => {
    return axios.put(`${API_URL}/companies/${company_id}/offers/${offer_id}`, data);
}

// DELETE /companies/:company_id/offers/:offer_id
export const deleteCompanyOffer = (company_id, offer_id) => {
    return axios.delete(`${API_URL}/companies/${company_id}/offers/${offer_id}`);
}

// GET /cities
export const getCities = () => {
    return axios.get(`${API_URL}/cities`);
}

// GET /cities/:city_id/areas
export const getCityAreas = (id) => {
    return axios.get(`${API_URL}/cities/${id}/areas`);
}