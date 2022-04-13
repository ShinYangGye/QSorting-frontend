import axios from "axios";
import axiosInterceptor from "./axiosIntercepter";

const baseUrl = 'http://localhost:8080/api';

const postUserJoin = (joinObj) => axios.post(`${baseUrl}/user/join`, joinObj);
const postUserLogin = (loginObj) => axios.post(`${baseUrl}/user/login`, loginObj);
const getProfile = () => axiosInterceptor.get(`${baseUrl}/auth/profile`);
const getRefreshToken = () => axiosInterceptor.get(`${baseUrl}/auth/refresh-token`);

export {
	postUserJoin,
	postUserLogin,
	getProfile,
	getRefreshToken,
}