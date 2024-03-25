<template>
	<nav aria-label="Page navigation example">
		<ul class="pagination justify-content-center">
			<li class="page-item">
				<a
					:class="isPrevPage"
					class="page-link"
					@click.prevent="$emit('page', currentPage - 1)"
					aria-label="Previous"
				>
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li
				class="page-item"
				v-for="page in pageCount"
				:key="page"
				:class="{ active: currentPage === page }"
			>
				<a class="page-link" @click.prevent="$emit('page', page)">{{ page }}</a>
			</li>
			<li class="page-item" :class="isNextPage">
				<a
					class="page-link"
					@click.prevent="$emit('page', currentPage + 1)"
					aria-label="Next"
				>
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
	currentPage: {
		type: Number,
		required: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
});

defineEmits(['page']);

const isPrevPage = computed(() => {
	return { disabled: !(props.currentPage > 1) };
});

const isNextPage = computed(() => {
	return { disabled: !(props.currentPage < props.pageCount) };
});

// props를 자식 컴포넌트에서 변경해야할경우?
// emit을 사용함. 'page라는 이벤트를 emit으로 선언하였음.'
// 부모 컴포넌트인 PostListPage에 page라는 값을 보내서 params로 선언한 상태값의 값을 갱신
</script>

<style scoped>
li a {
	cursor: pointer;
	user-select: none;
}

.disabled {
	cursor: default;
}
</style>
