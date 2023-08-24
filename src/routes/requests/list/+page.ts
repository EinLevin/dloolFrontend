import { browser } from '$app/environment';
import { PUBLIC_API_URL } from '$env/static/public';
import { isLoggedIn } from '$lib/helpers/isLoggedIn.js';
import type { RequestsResponse } from '../../../types/request.js';

export const load = async ({ fetch }) => {
	if (browser) {
		// check if the user is logged in
		const loggedIn = isLoggedIn();

		if (!loggedIn) return null;

		const uri = '/auth/requests';
		const url = PUBLIC_API_URL + uri;
		const response: RequestsResponse = await fetch(url, {
			headers: {
				Authorization: 'Bearer ' + localStorage.getItem('token')
			}
		}).then((res) => res.json());
		return response;
	}
};
