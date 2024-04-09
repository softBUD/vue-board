<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">
			{{ content }}
		</p>
		<p class="text-muted">{{ createdDate }}</p>
		<template #footer>
			<div class="d-flex flex-row-reverse">
				<!-- click.stop은 이벤트 버블링을 방지하여 상위 컴포넌트에 이벤트 전달 방지 -->
				<button class="btn p-0" @click.stop="$emit('modal')">
					<i class="bi bi-emoji-wink-fill"></i>
				</button>
				<button class="btn p-1" @click.stop="$emit('preview')">
					<i class="bi bi-card-checklist"></i>
				</button>
			</div>
		</template>
	</AppCard>
</template>

<script setup>
import { computed, inject } from 'vue';
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});

defineEmits(['modal', 'preview']);
const dayjs = inject('dayjs');

const createdDate = computed(() =>
	dayjs(props.createdAt).format('YYYY. MM. DD HH:mm:ss'),
);
</script>

<style lang="scss" scoped></style>
