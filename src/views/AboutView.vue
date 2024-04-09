<template>
	<div>
		<h3>About View</h3>
		<hr />
		<h2>Store</h2>
		<!-- store에 저장된 값 불러옴 -->
		<p>counter : {{ counter }}</p>
		<p>doubleCount: {{ store.doubleCount }}</p>
		<p>doubleCountPlusOne: {{ store.doubleCountPlusOne }}</p>
		<button @click="increment()">click!!!</button>
	</div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

// 구조분해 할당으로 store의 값을 가져오면 반응성을 잃게된다.
// 그래서 Pinia의 storeToRefs를 사용한다.
const store = useCounterStore();
// const { counter } = store;

const { counter } = storeToRefs(store);
const { increment } = store;

// store에서 가져온 값을 바로 변경할 수 있다.
counter.value = 100;
</script>

<style scoped></style>
