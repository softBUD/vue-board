<template>
	<div>
		<h2>게시글 수정</h2>
		<hr />
		<form @submit.prevent="edit">
			<div class="mb-3">
				<label for="title" class="form-label">제목</label>
				<input type="text" v-model="form.title" class="form-control" />
			</div>
			<div class="mb-3">
				<label for="content" class="form-label">내용</label>
				<textarea
					class="form-control"
					v-model="form.content"
					id="content"
					rows="3"
				></textarea>
			</div>
			<div>
				<button
					type="button"
					class="btn btn-outline-danger me-2"
					@click="pushDetailPage"
				>
					취소
				</button>
				<button type="submit" class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const id = route.params.id;
const form = ref({
	title: null,
	content: null,
});

const fetchPost = async () => {
	const { data } = await getPostById(id);
	setForm(data);
};

const setForm = ({ title, content, createdAt }) => {
	form.value.title = title;
	form.value.content = content;
	form.value.createdAt = createdAt;
};

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push({ name: 'PostDetail', params: { id } });
	} catch (error) {
		console.error(error);
	}
};

fetchPost();

const pushDetailPage = () =>
	router.push({ name: 'PostDetail', params: { id } });
</script>

<style scoped></style>
