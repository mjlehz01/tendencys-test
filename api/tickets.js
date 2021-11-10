import headerAxios from "/api/headerAxios";

export async function getAllTicketsApi() {
	try {
		const response = await headerAxios("tickets");
		return response.data;
	} catch (e) {
		return e;
	}
}

export async function getTicketApi(id) {
	try {
		const response = await headerAxios(`tickets/${id}`);
		return response.data;
	} catch (e) {
		return e;
	}
}
