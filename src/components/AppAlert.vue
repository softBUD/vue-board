<template>
	<!-- <Transition name="slide">
		<div v-if="show" class="alert app-alert" :class="styleType" role="alert">
			{{ message }}
		</div>
	</Transition> -->
	<div class="app-alert">
		<TransitionGroup name="slide">
			<!-- 구조분해할당 -->
			<div
				v-for="({ message, type }, index) in items"
				:key="index"
				:class="styleType(type)"
				class="alert"
				role="alert"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});

// const props = defineProps({
// 	show: {
// 		type: Boolean,
// 	},
// 	message: {
// 		type: String,
// 		required: true,
// 	},
// 	type: {
// 		type: String,
// 		default: '',
// 		validator: value => ['success', 'error'].includes(value),
// 	},
// });

const styleType = type => {
	return type === 'error' ? 'alert-danger' : 'alert-success';
};
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}

.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}

.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
