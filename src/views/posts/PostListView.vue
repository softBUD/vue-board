<template>
	<div>
		<h2>게시글 목록</h2>
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
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { ref } from 'vue';
import { getPostData } from '@/api/posts.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	posts.value = getPostData();
};

const pushPage = number => {
	router.push(`/posts/${number}`);
};

fetchPosts();
</script>

<style scoped></style>
