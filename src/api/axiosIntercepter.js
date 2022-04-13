import axios from "axios";

const axiosInterceptor = axios.create({});

axiosInterceptor.interceptors.request.use((config) => {
	const token = "Bearer " + localStorage.getItem("accessToken");
	config.headers.Authorization = token;
	return config;
});

/*
axiosInterceptor.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		if (error.response.status === 401) {
			alert("xxxx:" + token);
		} else {
			return Promise.reject(error);
		}
	},
);
*/

export default axiosInterceptor;