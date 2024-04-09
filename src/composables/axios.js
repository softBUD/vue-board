import axios from 'axios';
import { ref, unref, watchEffect, isRef } from 'vue';

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const useAxios = (url, config = {}, options = {}) => {
	const response = ref(null);
	const data = ref(null);
	const error = ref(null);
	const loading = ref(false);

	const defaultConfig = {
		method: 'get',
	};

	const defaultOptions = {
		immediate: true,
	};

	// defaultOptions 기본값으로 설정되었다가,
	// options 에서 넘어온 immediate 기본값이 false면 false가 된다
	// unref는 ref로 넘어온 값이면 값을 ref 객체의 value를 반환
	const { params } = config;
	const { onSuccess, onError, immediate } = { ...defaultOptions, ...options };

	const excute = body => {
		loading.value = true;
		data.value = null;
		error.value = null;
		axios(unref(url), {
			...defaultConfig,
			...config,
			params: unref(params),
			data: typeof body === 'object' ? body : {},
		})
			.then(res => {
				response.value = res;
				data.value = res.data;
				if (onSuccess) {
					onSuccess(res);
				}
			})
			.catch(err => {
				error.value = err;
				onError(err);
			})
			.finally(() => {
				loading.value = false;
			});
	};

	if (isRef(params) || isRef(url)) {
		watchEffect(excute);
		// watchEffect로 excute를 실행할때 첫번째 파라미터는 함수가 넘어옴
		// watchEffect 공식문서 참조
	} else {
		if (immediate) {
			excute();
		}
	}

	// composable에서 reactive 객체를 반환하면 구조분해 할당시 내부 상태와 반응성 연결이 끊어진다.

	return {
		data,
		error,
		loading,
		response,
		excute,
	};
};
