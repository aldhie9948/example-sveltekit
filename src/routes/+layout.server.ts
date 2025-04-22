export const load = (ev) => {
	const { cookies } = ev;
	return { cookies: cookies.get('token-kt') };
};
