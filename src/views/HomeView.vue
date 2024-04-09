<template>
	<div>
		<h3>Home View</h3>
	</div>
	<hr />
	<AppGrid :items="items" v-slot="{ item }">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
	<!-- v-slot은 array 타입의 값을 전달하면 값 추론 기능에 의하여 반복문 형태로 UI를 보여준다 -->
	<div>position : {{ x }}</div>
	<div>position : {{ y }}</div>
	<div>{{ position }}</div>
</template>

<!-- <script>
export default {
	created() {
		console.log(this.$person.name);
		this.$person.say();
	},
};
</script> -->

<!-- 컴포넌트 인스턴스는 setup 라이프사이클 이후에 생성됨. -->

<script setup>
import { reactive, ref, toRefs } from 'vue';

const position = reactive({
	x: 100,
	y: 1000,
});

// toRef로 선언한 값은 reactive 안에 object 키에 할당된 값이 변경되면
// toRef에 할당된 값도 반응형으로 같이 변경된다.
// toRefs도 마찬가지로 반응형으로 동작된다.
const items = ref(['사과', '딸기', '포도', '바나나']);
// const x = toRef(position, 'x');
// const y = toRef(position, 'y');
const { x, y } = toRefs(position);
// const person = inject('person');
// console.log('person? : ', person.name);
</script>

<style scoped></style>
