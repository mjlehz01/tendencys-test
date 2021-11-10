import axios from "axios";

export default async function headerAxios(url, params) {
	const paramsTemp = {
		...params,
		headers: {
			Authorization: `Bearer ${process.env.TOKEN}`,
		},
	};

	try {
		const response = await axios({
			method: paramsTemp.method || "get",
			url: `${process.env.URL_BACKEND}${url}`,
			headers: paramsTemp.headers,
		});
		return response.data;
	} catch (e) {
		return e.response;
	}
}
