import axios from 'axios';

function create(baseURL, options) {
	const instance = axios.create(
		Object.assign({
			baseURL: baseURL,
			...options,
		}),
	);
	return instance;
}
// 환경변수를 설정하여 base url를 설정함

// eslint-disable-next-line no-undef
const baseURL = `${process.env.VUE_APP_API_URL}posts/`;
export const posts = create(baseURL);
