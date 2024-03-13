<template>
	<div>
		<h2>게시글 목록</h2>
		<div class="col-3">
			<select v-model="params._limit" class="form-select">
				<option value="3">3개</option>
				<option value="6">6개</option>
				<option value="9">9개</option>
			</select>
		</div>
		<hr />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="pushPage(post.id)"
				></PostItem>
			</div>
			<nav aria-label="Page navigation example">
				<ul class="pagination justify-content-center">
					<li class="page-item">
						<a
							:class="{ disabled: !(params._page > 1) }"
							class="page-link"
							@click.prevent="params._page--"
							aria-label="Previous"
						>
							<span aria-hidden="true">&laquo;</span>
						</a>
					</li>
					<li
						class="page-item"
						v-for="page in pageCount"
						:key="page"
						:class="{ active: params._page === page }"
					>
						<a class="page-link" @click.prevent="params._page = page">{{
							page
						}}</a>
					</li>
					<li
						class="page-item"
						:class="{ disabled: !(params._page < pageCount) }"
					>
						<a
							class="page-link"
							@click.prevent="params._page++"
							aria-label="Next"
						>
							<span aria-hidden="true">&raquo;</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
		<hr />
		<AppCard>
			<PostDetailView :id="2"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { computed, ref, watchEffect, watch } from 'vue';
import { useRouter } from 'vue-router';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPostList } from '@/api/posts';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
});

const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);
const fetchPosts = async () => {
	// vue의 watchEffect는 자동으로 의존하는 상태를 추적하여 관리한다.
	// const response =  getPostList().then(response => {
	// 	console.log('response :', response);
	// });

	// posts.value = getPostData();

	try {
		const { data, headers } = await getPostList(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (error) {
		console.error(error);
	}
};

const pushPage = number => {
	router.push(`/posts/${number}`);
};

watchEffect(fetchPosts);
watch(
	() => params.value._limit,
	(newLimit, oldLimit) => {
		if (newLimit !== oldLimit) {
			params.value._page = 1;
		}
	},
);
</script>

<style scoped></style>
