import { ref } from 'vue';

const alerts = ref([]);

export function useAlert() {
	const showAlert = (message, type = 'error') => {
		alerts.value.push({ message, type });
		// message.value = text;
		// show.value = true;
		// alertType.value = type;
		setTimeout(() => {
			// show.value = false;
			// message.value = '';
			alerts.value.shift();
		}, 2000);
	};

	const showSuccessAlert = message => showAlert(message, 'success');

	return {
		alerts,
		showAlert,
		showSuccessAlert,
	};
}
