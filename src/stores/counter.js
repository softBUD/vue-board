import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}),
	// getters에서 값을 일반함수로 정의하면 state가 아니라
	// this로 값을 참조해야한다.
	getters: {
		doubleCount: state => state.counter * 2,
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
	},
	actions: {
		// actions에서 함수를 화살표함수로 정의하면
		// this로 값을 받아올 수 없다.
		increment() {
			this.counter++;
		},
	},
});
