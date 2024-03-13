<template>
	<div>
		<h2>게시글 등록</h2>
		<hr />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="submit"
		>
			<template #actions>
				<div>
					<button
						type="button"
						class="btn btn-outline-dark me-2"
						@click="pushListPage"
					>
						목록
					</button>
					<button type="submit" class="btn btn-primary">저장</button>
				</div>
			</template>
		</PostForm>
	</div>
</template>
<script setup>
import PostForm from '@/components/posts/PostForm.vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import { ref } from 'vue';

const router = useRouter();
const form = ref({
	title: null,
	content: null,
});

const submit = async () => {
	try {
		const data = {
			...form.value,
			createAt: Date.now(),
		};
		await createPost(data);
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error(error);
	}
};

const pushListPage = () => router.push({ name: 'PostList' });
</script>

<style scoped></style>
