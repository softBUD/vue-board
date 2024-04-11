import { useAlertStore } from '@/stores/alert';
import { storeToRefs } from 'pinia';

export function useAlert() {
	// const showAlert = (message, type = 'error') => {
	// 	alerts.value.push({ message, type });
	// 	// message.value = text;
	// 	// show.value = true;
	// 	// alertType.value = type;
	// 	setTimeout(() => {
	// 		// show.value = false;
	// 		// message.value = '';
	// 		alerts.value.shift();
	// 	}, 2000);
	// };

	// const showSuccessAlert = message => showAlert(message, 'success');

	// state 가져옴
	const { alerts } = storeToRefs(useAlertStore());
	// state에 등록된 액션함수 가져옴
	const { showAlert, showSuccessAlert } = useAlertStore();

	return {
		alerts,
		showAlert,
		showSuccessAlert,
	};
}
