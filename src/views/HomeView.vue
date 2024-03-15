<template>
	<div>
		<h3>Home View</h3>
	</div>
	<hr />
	<AppGrid :items="items" v-slot="{ item }">
		<AppCard>{{ item }}</AppCard>
	</AppGrid>
	<!-- v-slot은 array 타입의 값을 전달하면 값 추론 기능에 의하여 반복문 형태로 UI를 보여준다 -->
</template>

<script setup>
import { ref } from 'vue';
import AppGrid from '@/components/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';
const items = ref(['사과', '딸기', '포도', '바나나']);
</script>

<style scoped></style>
