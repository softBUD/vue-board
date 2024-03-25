<template>
	<AppModal
		v-model="show"
		:show="show"
		:title="title"
		:content="content"
		:createdAt="createdAt"
	>
		<template #default>
			<div class="row">
				<div class="col-3 text-muted">제목</div>
				<div class="col-9">{{ title }}</div>
				<div class="col-3 text-muted">내용</div>
				<div class="col-9">{{ content }}</div>
				<div class="col-3 text-muted"></div>
				<div class="col-9">{{ createdDate }}</div>
			</div>
		</template>
		<template #actions>
			<button
				type="button"
				class="btn btn-secondary"
				data-bs-dismiss="modal"
				@click="closeModal"
			>
				Close
			</button>
		</template>
	</AppModal>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
	modelValue: Boolean,
	title: String,
	content: String,
	createdAt: [String, Number],
});

const emit = defineEmits(['update:modelValue']);

const show = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});

const closeModal = () => (show.value = false);

const dayjs = inject('dayjs');

const createdDate = computed(() =>
	dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
);
</script>

<style scoped></style>
