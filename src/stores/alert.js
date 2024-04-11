import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
	state: () => ({
		alerts: [],
	}),
	actions: {
		showAlert(message, type = 'error') {
			this.alerts.push({ message, type });
			// message.value = text;
			// show.value = true;
			// alertType.value = type;
			setTimeout(() => {
				// show.value = false;
				// message.value = '';
				this.alerts.shift();
			}, 2000);
		},
		showSuccessAlert(message) {
			this.showAlert(message, 'success');
		},
	},
});
